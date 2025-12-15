import InfoCard from "./InfoCard";

export default function InfoList() {
  const data = [
    { number: 325, text: "Course" },
    { number: 405, text: "Work Out" },
    { number: 305, text: "Working Hour" },
    { number: 705, text: "Happy Client" },
  ];

  return (
    <div className="info-container">
      {data.map((item) => (
        <InfoCard key={item.text} number={item.number} text={item.text} />
      ))}
    </div>
  );
}
