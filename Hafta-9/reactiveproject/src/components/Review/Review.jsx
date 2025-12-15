import ReviewHeader from "./ReviewHeader";
import ClientCard from "./ClientCard";
import "./review.css";

export default function Review() {
  const clients = [
    {
      img: "/img/client1.jpg",
      job: "Diet Expert",
      title: "CFO",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis modi, obcaecati accusamus doloremque dolore reiciendis beatae! Assumenda, tempore deleniti voluptatibus minima aliquam atque quasi natus ad soluta."
    },
    {
      img: "/img/client2.jpg",
      job: "Cardio Trainer",
      title: "CEO",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores omnis modi, obcaecati accusamus doloremque dolore reiciendis beatae! Assumenda, tempore deleniti voluptatibus minima aliquam atque quasi natus ad soluta."
    }
  ];

  return (
    <section className="container-review-client" id="review">
      <div className="review-client">
        <ReviewHeader />

        <div className="all-clients">
          {clients.map((c, index) => (
            <ClientCard
              key={index}
              img={c.img}
              job={c.job}
              title={c.title}
              text={c.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
