import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import api from '../api';
import ApplyModal from '../components/ApplyModal';
import withAuth from '../hoc/withAuth';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [showApply, setShowApply] = useState(false);

  useEffect(() => {
    api.get(`/jobs/${jobId}`).then((res) => setJob(res.data));
  }, [jobId]);

  if (!job) return <p>Loading...</p>;

  const ProtectedApplyButton = withAuth(() => (
    <button onClick={() => setShowApply(true)}>Apply Now</button>
  ));

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <ProtectedApplyButton />
      {showApply && <ApplyModal job={job} onClose={() => setShowApply(false)} />}
    </div>
  );
};

export default JobDetailPage;