import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import withRole from './hoc/withRole';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={withRole(CourseDetail, 'student')()} />
      </Routes>
    </>
  );
};

export default App;