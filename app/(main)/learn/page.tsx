import { FeedWrapper } from "@/components/feed-wrapper";
import { StickWrapper } from "@/components/sticky-wrapper";
import React from "react";
import { Header } from "./header";
import UserProgress from "@/components/user-progress";
import {
  getCourseProgress,
  getLessonPercentage,
  getUnits,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";
import Promo from "@/components/promo";
import Quests from "@/components/quests";

type Props = {};

const PageLearn = async (props: Props) => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const lessonPercentageData = getLessonPercentage();
  const unitsData = getUnits();
  const userSubscriptionData = getUserSubscription();
  const [
    userProgress,
    units,
    courseProgress,
    lessonPercentage,
    userSubscription,
  ] = await Promise.all([
    userProgressData,
    unitsData,
    courseProgressData,
    lessonPercentageData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  if (!courseProgress) {
    redirect("/courses");
  }

  const isPro = !!userSubscription?.isActive;
  return (
    <div className="flex flex-row-reverse  gap-[48px] px-6 pt-4">
      <StickWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && <Promo />}
        <Quests points={userProgress?.points} />
      </StickWrapper>
      <FeedWrapper>
        <Header title={userProgress.activeCourse.title} />
        {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLessons={courseProgress?.activeLesson}
              activeLessonsPercentage={lessonPercentage}
            />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default PageLearn;
