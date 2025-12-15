export default function Hamburger() {
  const toggleMenu = () => {
    const nav = document.querySelector(".nav-menu");
    nav.classList.toggle("show");
  };

  return (
    <div className="hamburger-menu" onClick={toggleMenu}>
      &#9776;
    </div>
  );
}