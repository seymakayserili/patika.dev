export default function ClientCard({ img, job, title, text }) {
  return (
    <div className="client">
      <div className="client-info">
        <img src={img} alt={title} title={title} />

        <div className="client-job-title">
          <h5>{job}</h5>
          <h6>{title}</h6>
        </div>
      </div>

      <div className="client-p">{text}</div>
    </div>
  );
}
