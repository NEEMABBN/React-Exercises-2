import { useState } from "react";
import CourseList from "./CourseList";

export default function CourseBox() {
  const [stringArray, setStringArray] = useState([
    {
      title: "React :",
      description: "this is React section",
    },
    {
      title: "Vue :",
      description: "this is Vue section",
    },
    {
      title: "Angular :",
      description: "this is Angular section",
    },
  ]);

  const loadMoreHandler = () => {
    setStringArray((PrevArray) => {
      return [
        ...PrevArray,
        {
          title: "Laravel :",
          description: "this is Laravel section",
        },
        {
          title: "Swift :",
          description: "this is Swift section",
        },
      ];
    });
  };

  return (
    <div>
      {/* stringArray = stringArray.map((item) => <CourseList>{item}</CourseList>); */}
      {stringArray.map((item) => (
        <CourseList course={item} />
      ))}
      <button onClick={loadMoreHandler}>Load More</button>
    </div>
  );
}
