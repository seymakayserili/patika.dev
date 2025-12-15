export default function TrainerInfo({ name, role }) {
  return (
    <div className="trainer-info">
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}
