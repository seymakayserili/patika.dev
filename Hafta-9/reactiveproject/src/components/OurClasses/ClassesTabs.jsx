export default function ClassesTabs({ activeClass, setActiveClass }) {
  return (
    <div className="button-our-classes">
      <button
        className={`btn ${activeClass === "yoga" ? "btn-active" : ""}`}
        onClick={() => setActiveClass("yoga")}
      >
        Yoga
      </button>

      <button
        className={`btn ${activeClass === "group" ? "btn-active" : ""}`}
        onClick={() => setActiveClass("group")}
      >
        Group
      </button>

      <button
        className={`btn ${activeClass === "solo" ? "btn-active" : ""}`}
        onClick={() => setActiveClass("solo")}
      >
        Solo
      </button>

      <button
        className={`btn ${activeClass === "stretching" ? "btn-active" : ""}`}
        onClick={() => setActiveClass("stretching")}
      >
        Stretching
      </button>
    </div>
  );
}
