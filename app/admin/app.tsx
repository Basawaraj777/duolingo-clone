"use client";

import { Admin, ListGuesser, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { UnitList } from "./units/list";
import { UnitsCreate } from "./units/create";
import { UnitsEdit } from "./units/edit";
import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { ChallengeList } from "./challenge/list";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";
import { ChallengeOptionList } from "./challengeOption/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";

const dataProvider = simpleRestProvider("/api");
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="courses"
        recordRepresentation="title"
        list={CourseList}
        create={CourseCreate}
        edit={CourseEdit}
      />
      <Resource
        name="units"
        recordRepresentation="title"
        list={UnitList}
        create={UnitsCreate}
        edit={UnitsEdit}
      />

      <Resource
        name="lessons"
        recordRepresentation="title"
        list={LessonList}
        create={LessonCreate}
        edit={LessonCreate}
      />

      <Resource
        name="challenges"
        recordRepresentation="question"
        list={ChallengeList}
        create={ChallengeCreate}
        edit={ChallengeEdit}
      />

      <Resource
        name="challengeOptions"
        recordRepresentation="text"
        options={{ label: "Challenge Options" }}
        list={ChallengeOptionList}
        create={ChallengeOptionCreate}
        edit={ChallengeOptionEdit}
      />
    </Admin>
  );
};

export default App;
