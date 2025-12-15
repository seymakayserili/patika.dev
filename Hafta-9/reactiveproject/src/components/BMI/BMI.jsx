import { useRef, useEffect } from "react";
import "./bmi.css";

export default function BMI() {
  const pointerRef = useRef(null);
  const resultsRef = useRef(null);
  const scaleWrapperRef = useRef(null);

  // Pozisyon hesaplama fonksiyonu
  const positionPointer = (bmiValue) => {
    const wrapper = scaleWrapperRef.current;
    const pointer = pointerRef.current;
    if (!wrapper || !pointer) return;

    const scaleWidth = wrapper.offsetWidth;

    const minBmi = 16;
    const maxBmi = 40;

    let normalizedBmi;
    if (bmiValue <= minBmi) normalizedBmi = 0;
    else if (bmiValue >= maxBmi) normalizedBmi = 1;
    else normalizedBmi = (bmiValue - minBmi) / (maxBmi - minBmi);

    const position = scaleWidth * normalizedBmi;

    pointer.style.left = `${position}px`;
    pointer.style.display = "block";
  };

  // Form gönderimi
  const handleSubmit = (e) => {
    e.preventDefault();

    const height = parseInt(e.target.height.value, 10);
    const weight = parseInt(e.target.weight.value, 10);

    const pointer = pointerRef.current;
    const results = resultsRef.current;

    if (pointer) pointer.style.display = "none";
    if (!results) return;

    if (!height || height <= 0 || isNaN(height)) {
      results.textContent = "Please provide a valid height";
      return;
    }

    if (!weight || weight <= 0 || isNaN(weight)) {
      results.textContent = "Please provide a valid weight";
      return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    results.innerHTML = `<span> : ${bmi} </span>`;

    positionPointer(parseFloat(bmi));
  };

  // Eğer pencere boyutu değişirse pointer konumunu yeniden hesaplayabiliriz
  useEffect(() => {
    const handleResize = () => {
      // Eğer sonuçta bir bmi değeri gösteriliyorsa, yeniden hesapla
      const resultsText = resultsRef.current?.textContent || "";
      const matched = resultsText.match(/([0-9]+(\.[0-9]+)?)/);
      if (matched) {
        const bmiValue = parseFloat(matched[1]);
        positionPointer(bmiValue);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bmi">
      <div className="bmi-container">
        <div className="bmi-text">
          <h2>BMI Calculator</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
          </p>

          <form onSubmit={handleSubmit}>
            <input type="number" id="height" name="height" placeholder="Your Height" /> cm
            <input type="number" id="weight" name="weight" placeholder="Your Weight" /> kg
            <br />
            <button className="btn-cal" type="submit">Calculate</button>
          </form>
        </div>

        <div className="bmi-image">
          <h3>Your BMI <span id="results" ref={resultsRef}></span></h3>

          <div className="bmi-scale-wrapper" ref={scaleWrapperRef}>
            <img src="/img/bmi-index.jpg" alt="Body Mass Index Chart" title="Body Mass Index Chart" />
            <div id="pointer" ref={pointerRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
}