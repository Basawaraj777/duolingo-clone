"use server";

import { POINTS_TO_REFILL } from "@/constants";
import db from "@/db/drizzel";
import { getCoursById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const upsertUserProgress = async (courseid: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!user || !userId) {
    throw new Error("Unauthorized");
  }

  const course = await getCoursById(courseid);
  if (!course) {
    throw new Error("Course not found");
  }

  if (!course.units.length || !course.units[0].lessons.length) {
    throw new Error("Course is empty");
  }

  const exisistingUserProgress = await getUserProgress();

  if (exisistingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseid,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    });

    revalidatePath("/courses");
    revalidatePath("/learn");
    redirect("/learn");
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseid,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  });

  revalidatePath("/courses");
  revalidatePath("/learn");
  redirect("/learn");
};

export const refillHearts = async () => {
  const currentUserProgress = await getUserProgress();
  if (!currentUserProgress) {
    throw new Error("User progress not found");
  }
  if (currentUserProgress.hearts === 5) {
    throw new Error("Hearts are alredy full");
  }
  if (currentUserProgress.points < POINTS_TO_REFILL) {
    throw new Error("Not enough poinst");
  }
  await db
    .update(userProgress)
    .set({
      hearts: 5,
      points: currentUserProgress.points - POINTS_TO_REFILL,
    })
    .where(eq(userProgress.userId, currentUserProgress.userId));

  revalidatePath("/shop");
  revalidatePath("/learn");
  revalidatePath("/quests");
  revalidatePath("/leaderboard");
};
