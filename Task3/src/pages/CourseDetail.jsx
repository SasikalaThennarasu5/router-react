import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../api';
import VideoPortal from '../components/VideoPortal';

const CourseDetail = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    axios.get(`/courses/${courseId}`).then(res => setCourse(res.data));
  }, [courseId]);

  if (!course) return <p>Loading...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={() => setShowVideo(true)}>Watch Video</button>

      {showVideo && (
        <VideoPortal>
          <div className="video-modal">
            <video controls autoPlay>
              <source src={course.videoUrl} type="video/mp4" />
            </video>
            <button onClick={() => setShowVideo(false)} style={{ position: 'absolute', top: '10px', right: '10px' }}>X</button>
          </div>
        </VideoPortal>
      )}
    </div>
  );
};

export default CourseDetail;