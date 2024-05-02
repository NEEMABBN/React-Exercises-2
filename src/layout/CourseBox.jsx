import { useState } from "react";
import CourseList from "./CourseList";

export default function CourseBox() {
  const [stringArray, setStringArray] = useState([
    {
      id: 1,
      title: "React :",
      description: "this is React section",
    },
    {
      id: 2,
      title: "Vue :",
      description: "this is Vue section",
    },
    {
      id: 3,
      title: "Angular :",
      description: "this is Angular section",
    },
  ]);

  const loadMoreHandler = () => {
    setStringArray((PrevArray) => {
      return [
        ...PrevArray,
        {
          id: 4,
          title: "Laravel :",
          description: "this is Laravel section",
        },
        {
          id: 5,
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
        <CourseList 
        key={item.id}
        course={item} />
      ))}
      <button onClick={loadMoreHandler}>Load More</button>
    </div>
  );
}
