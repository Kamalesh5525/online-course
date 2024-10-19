
import { useCourses } from '../context/CourseContext';

const Dashboard = () => {
  const { enrolledCourses } = useCourses();

  return (
    <div className="container my-5">
      <h1>Your Enrolled Courses</h1>
      <ul className="list-group">
        {enrolledCourses.length > 0 ? (
          enrolledCourses.map((course, index) => (
            <li key={index} className="list-group-item">
              {course.title}
            </li>
          ))
        ) : (
          <li className="list-group-item">No courses enrolled.</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
