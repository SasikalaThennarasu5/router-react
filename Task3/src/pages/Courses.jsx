import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courseList = [
    { id: 1, title: 'React Basics' },
    { id: 2, title: 'Advanced JavaScript' }
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Courses</h2>
      {courseList.map(course => (
        <div key={course.id}>
          <Link to={`/courses/${course.id}`}>{course.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;