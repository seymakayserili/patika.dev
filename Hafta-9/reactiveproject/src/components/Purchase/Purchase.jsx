import PurchaseHeader from "./PurchaseHeader";
import ProductCard from "./ProductCard";
import "./purchase.css";

export default function Purchase() {
  const products = [
    {
      img: "/img/purchase1.jpg",
      name: "Kettlebell / 5kg",
      oldPrice: "89,99$",
      newPrice: "59,99$"
    },
    {
      img: "/img/purchase2.jpg",
      name: "Treadmill",
      oldPrice: "899,99$",
      newPrice: "599,99$"
    },
    {
      img: "/img/purchase3.jpg",
      name: "Adjustable Dumbbell",
      oldPrice: "89,99$",
      newPrice: "59,99$"
    },
    {
      img: "/img/purchase4.jpg",
      name: "Kettlebell / 3kg",
      oldPrice: "89,99$",
      newPrice: "59,99$"
    }
  ];

  return (
    <section className="container-purchase-from-us" id="purchase">
      <PurchaseHeader />

      <div className="card-container">
        {products.map((p) => (
          <ProductCard
            key={p.name}
            img={p.img}
            name={p.name}
            oldPrice={p.oldPrice}
            newPrice={p.newPrice}
          />
        ))}
      </div>
    </section>
  );
}
