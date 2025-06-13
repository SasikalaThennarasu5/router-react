import ApplyModal from '../components/ApplyModal';
import withAuth from '../hoc/withAuth';

function JobDetail() {
  //...
  const [showModal, setShowModal] = useState(false);
  const handleApply = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const ProtectedApplyButton = withAuth(() => (
    <button onClick={handleApply}>Apply Now</button>
  ));

  return (
    <div>
      {/* job content */}
      <ProtectedApplyButton />

      {showModal && (
        <ApplyModal onClose={closeModal} jobTitle={job.title} />
      )}
    </div>
  );
}
