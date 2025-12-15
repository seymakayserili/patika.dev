export default function ClassItem({ title, description, schedule, image }) {
  return (
    <div className="content">
      <div className="text-section">
        <h2>{title}</h2>
        <p className="p-info">{description}</p>
        <p className="p-date">{schedule}</p>
      </div>

      <div className="image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
}
