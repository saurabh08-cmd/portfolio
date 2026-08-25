import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Education <span>&</span>
          <br /> Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Vocational (B.Voc)</h4>
                <h5>Mangalayatan University, Aligarh</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Pursuing B.Voc in Multimedia & Animation. Gaining hands-on experience
              in video editing, motion graphics, and visual storytelling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Secondary Education (CBSE)</h4>
                <h5>New Delhi</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Senior Secondary Education under the Central Board of
              Secondary Education (CBSE).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Education (CBSE)</h4>
                <h5>New Delhi</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Secondary Education under the Central Board of
              Secondary Education (CBSE).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
