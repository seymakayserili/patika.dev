export default function ProductCard({ img, name, oldPrice, newPrice }) {
  return (
    <div className="card">
      <img src={img} alt={name} title={name} />

      <div className="card-body">
        <h3 className="product-name">{name}</h3>

        <p className="price">
          <span>{oldPrice}</span> / {newPrice}
        </p>

        <button className="add-to-cart">
          <i className="fa-solid fa-cart-shopping fa-lg"></i>
          Add To Cart
        </button>
      </div>
    </div>
  );
}
