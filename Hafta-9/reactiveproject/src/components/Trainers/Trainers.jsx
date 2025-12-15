import TrainersHeader from "./TrainersHeader";
import TrainerCard from "./TrainerCard";
import "./trainers.css";

export default function Trainers() {
  // data burada sabit; istersen backend ile değiştirilebilir
  const trainers = [
    { img: "/img/trainer1.jpg", name: "Alice Smith", role: "Pilates Instructor" },
    { img: "/img/trainer2.jpg", name: "Michael Johnson", role: "Strength Coach" },
    { img: "/img/trainer3.jpg", name: "Jane Doe", role: "Cardio Trainer" },
  ];

  return (
    <section className="our-trainers-bg" id="trainer">
      <TrainersHeader />

      <div className="best-trainer">
        {trainers.map((t) => (
          <TrainerCard key={t.name} img={t.img} name={t.name} role={t.role} />
        ))}
      </div>
    </section>
  );
}
