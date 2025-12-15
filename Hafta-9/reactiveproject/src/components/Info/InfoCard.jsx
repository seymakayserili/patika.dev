export default function InfoCard({ number, text }) {
  return (
    <div className="info-card">
      <h3 className="info-number">{number}</h3>
      <p className="info-text">{text}</p>
    </div>
  );
}
