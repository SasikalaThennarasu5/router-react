import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Jobs.css'; // optional if you add styling

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // ✅ Static/fake data for initial testing
    const fakeJobs = [
      {
        id: 1,
        title: 'Frontend Developer',
        company: 'TechNova',
        location: 'Remote',
        description: 'Build and optimize UI components using React.',
      },
      {
        id: 2,
        title: 'Backend Engineer',
        company: 'DataWave',
        location: 'Bangalore',
        description: 'Create RESTful APIs and manage databases.',
      },
      {
        id: 3,
        title: 'Full Stack Developer',
        company: 'CodeLabs',
        location: 'Chennai',
        description: 'Work across frontend and backend systems.',
      },
    ];

    setJobs(fakeJobs);
  }, []);

  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <Link to={`/jobs/${job.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
