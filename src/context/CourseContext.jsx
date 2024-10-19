import React, { createContext, useState, useContext } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [courseProgress, setCourseProgress] = useState({});

  const enrollCourse = (course) => {
    setEnrolledCourses((prev) => [...prev, course]);
  };

  const updateProgress = (courseId, progress) => {
    setCourseProgress((prev) => ({ ...prev, [courseId]: progress }));
  };

  return (
    <CourseContext.Provider value={{ enrolledCourses, enrollCourse, courseProgress, updateProgress }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourses = () => {
  return useContext(CourseContext);
};
