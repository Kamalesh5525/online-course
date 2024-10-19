import { useState } from 'react';
import CourseCard from '../components/CourseCard';

const courses = [
  
  { id: 1, title: 'Course 1', description: 'Description 1' },
  { id: 2, title: 'Course 2', description: 'Description 2' },
  
];

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="course-list">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
