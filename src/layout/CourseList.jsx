export default function CourseList({ course }) {
  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  );
}
