import { useParams } from "react-router-dom";

export const CoursePage = () => {
  const { courseId } = useParams();
  return <>Course Page of courseId: {courseId}</>;
};
