import "./footer.css";

export default function Footer() {
  return (
    <section className="container-footer">
      <div className="footer-content-top">
        <img src="/img/logo.png" alt="Powerfull Logo" title="Powerfull Logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, quod, quae, voluptate, voluptas quia quibusdam
          voluptatibus quos doloribus quidem fugiat. Quisquam voluptatum, quod,
          quae, voluptate, voluptas quia quibusdam voluptatibus quos doloribus
          quidem fugiat.
        </p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Classes</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Helpful Links</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Supports</a></li>
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
