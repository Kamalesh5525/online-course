

import CourseCard from '../components/CourseCard';

const Home = () => {
  const featuredCourses = [
    { id: 1, title: 'JavaScript Basics', description: 'Learn the fundamentals of JavaScript.', color: '#007bff' },
    { id: 2, title: 'React for Beginners', description: 'Build interactive UIs using React.', color: '#28a745' },
    { id: 3, title: 'CSS Flexbox and Grid', description: 'Master layout techniques with Flexbox and Grid.', color: '#ffc107' },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center" style={{ color: '#343a40' }}>Featured Courses</h1>
      <div className="row justify-content-center">
        {featuredCourses.map(course => (
          <div className="col-md-4 mb-4" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
