import { useState } from "react";
import ClassesTabs from "./ClassesTabs";
import ClassesContent from "./ClassesContent";
import "./classes.css";

export default function OurClasses() {
  const [activeClass, setActiveClass] = useState("yoga");

  return (
    <div className="our-classes-bg" id="classes">
      <div className="our-classes">
        
        <h2>OUR CLASSES</h2>
        <p>
          Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.
        </p>
</div>
        <ClassesTabs activeClass={activeClass} setActiveClass={setActiveClass} />

        <ClassesContent activeClass={activeClass} />
      
    </div>
  );
}
