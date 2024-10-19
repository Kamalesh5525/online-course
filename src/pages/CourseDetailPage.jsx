
import { useParams } from 'react-router-dom';
import LessonPlayer from '../components/LessonPlayer';

const CourseDetailPage = () => {
  const { id } = useParams();

  
  const lesson = {
    title: 'Introduction to React',
    videoUrl: 'https://www.example.com/path/to/video.mp4', 
    content: 'In this lesson, we will learn about the basics of React.',
  };

  return (
    <div>
      <h2>Course Details for Course ID: {id}</h2>
      <LessonPlayer lesson={lesson} />
    </div>
  );
};

export default CourseDetailPage;
