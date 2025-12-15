export default function ClassesContent({ activeClass }) {
  return (
    <div>
      {activeClass === "yoga" && (
        <div className="content" id="yoga" style={{ display: "flex" }}>
          <div className="text-section">
            <h2>Why are your Yoga?</h2>
            <p className="p-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pariatur
              possimus voluptatum impedit adit perferendis dis dolorum placeat,
              exercitationem in officia autem maiores ab nostrum laboriosam
              sapiente nulla totam neque eum veniam.
            </p>

            <h2>When comes Yoga Your Time.</h2>
            <p className="p-date">
              Saturday-Sunday: 8:00am - 10:00am <br />
              Monday-Tuesday: 10:00am - 12:00pm <br />
              Wednesday-Friday: 3:00pm - 6:00pm
            </p>
          </div>

          <div className="image">
            <img src="/img/yoga.jpg" alt="Yoga" />
          </div>
        </div>
      )}

      {activeClass === "group" && (
        <div className="content" id="group" style={{ display: "flex" }}>
          <div className="text-section">
            <h2>Why are your Group?</h2>
            <p className="p-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pariatur
              possimus voluptatum impedit adit perferendis dis dolorum placeat,
              exercitationem in officia autem maiores ab nostrum laboriosam
              sapiente nulla totam neque eum veniam.
            </p>

            <h2>When comes Group Your Time.</h2>
            <p className="p-date">
              Saturday-Sunday: 8:00am - 10:00am <br />
              Monday-Tuesday: 10:00am - 12:00pm <br />
              Wednesday-Friday: 3:00pm - 6:00pm
            </p>
          </div>

          <div className="image">
            <img src="/img/group.webp" alt="Group" />
          </div>
        </div>
      )}

      {activeClass === "solo" && (
        <div className="content" id="solo" style={{ display: "flex" }}>
          <div className="text-section">
            <h2>Why are your Solo?</h2>
            <p className="p-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pariatur
              possimus voluptatum impedit adit perferendis dis dolorum placeat,
              exercitationem in officia autem maiores ab nostrum laboriosam
              sapiente nulla totam neque eum veniam.
            </p>

            <h2>When comes Solo Your Time.</h2>
            <p className="p-date">
              Saturday-Sunday: 8:00am - 10:00am <br />
              Monday-Tuesday: 10:00am - 12:00pm <br />
              Wednesday-Friday: 3:00pm - 6:00pm
            </p>
          </div>

          <div className="image">
            <img src="/img/solo.jpg" alt="Solo" />
          </div>
        </div>
      )}

      {activeClass === "stretching" && (
        <div className="content" id="stretching" style={{ display: "flex" }}>
          <div className="text-section">
            <h2>Why are your Stretching?</h2>
            <p className="p-info">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pariatur
              possimus voluptatum impedit adit perferendis dis dolorum placeat,
              exercitationem in officia autem maiores ab nostrum laboriosam
              sapiente nulla totam neque eum veniam.
            </p>

            <h2>When comes Stretching Your Time.</h2>
            <p className="p-date">
              Saturday-Sunday: 8:00am - 10:00am <br />
              Monday-Tuesday: 10:00am - 12:00pm <br />
              Wednesday-Friday: 3:00pm - 6:00pm
            </p>
          </div>

          <div className="image">
            <img src="/img/stret.webp" alt="Stretching" />
          </div>
        </div>
      )}
    </div>
  );
}
