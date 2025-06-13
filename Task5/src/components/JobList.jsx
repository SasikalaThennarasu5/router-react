import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get('/jobs').then((res) => setJobs(res.data));
  }, []);

  return (
    <div>
      <h2>Available Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <Link to={`/jobs/${job.id}`}>{job.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;