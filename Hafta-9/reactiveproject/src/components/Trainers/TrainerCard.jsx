import TrainerInfo from "./TrainerInfo";

export default function TrainerCard({ img, name, role }) {
  return (
    <div className="trainer-card">
      <img src={img} alt={name} title={name} />
      <TrainerInfo name={name} role={role} />
    </div>
  );
}
