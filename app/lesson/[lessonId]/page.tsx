import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import React from "react";
import { Quiz } from "../quiz";

type Props = {
  params: {
    lessonId: number;
  };
};

const LeessonIdPage = async ({ params }: Props) => {
  const lessonData = getLesson(params.lessonId);
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) {
    redirect("/learn");
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallange={lesson.challenges}
      initialHeart={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription} //ADD use subcription
    />
  );
};

export default LeessonIdPage;
