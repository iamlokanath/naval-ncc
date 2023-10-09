import React from "react";
import "./Faq.css";
const Faq = () => {
  return (
    <>
      <div className="accordion navalfaq" id="accordionExample">
        <div className="navalfaqcontainer">
          <div className="faqcontainerheading">
            <h2 className="featurette-heading">FAQ</h2>
            <h4>Answers to Your Questions</h4>
          </div>

          <div className="faqcontainerdescrip">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  1. What is National cadet corps?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The National Cadet Corps (NCC) is a youth organization in
                  India that aims to instill qualities of leadership,
                  discipline, and patriotism among young people. It provides
                  military training, adventure activities, and community service
                  opportunities to its cadets, who are typically students from
                  schools and colleges.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  2. What is the motto of NCC?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  The motto of the National Cadet Corps (NCC) is "Unity and
                  Discipline."
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  3.What are the benifits of joining gcek naval ncc?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Joining the GCEK Naval NCC (Naval wing of the National Cadet
                  Corps) can offer several benefits. Firstly, it provides an
                  opportunity for personal development, fostering qualities such
                  as leadership, teamwork, and discipline. Secondly, it opens
                  doors to various career opportunities in the Indian Navy, as
                  NCC cadets with naval training often have an advantage when
                  applying for naval positions or related careers.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  4. What opportunities does gcek naval ncc offer in career
                  development?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  GCEK Naval NCC offers significant career development
                  opportunities, particularly for those interested in pursuing a
                  career in the Indian Navy or related fields. By participating
                  in the program, cadets can gain valuable technical skills
                  through activities like the Technical Attachment Camp, which
                  provides hands-on experience and knowledge in naval technology
                  and operations. Furthermore, GCEK Naval NCC provides
                  opportunities to attend various national-level camps and
                  events. These camps offer exposure to different aspects of
                  military training, leadership development, and interaction
                  with experts in the field. Such experiences can enhance a
                  cadet's resume and open doors to career paths within the armed
                  forces or other professions that value discipline, leadership,
                  and technical expertise.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  5. How to join GCEK NAVAL NCC?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  To join GCEK Naval NCC, typically, first and second-year
                  students should keep an eye out for official announcements and
                  notifications from GCEK regarding NCC enrollment. They can
                  then apply by following the instructions provided, attend the
                  selection process, and, if selected, actively participate in
                  NCC activities. GCEK conducts NCC selections annually,
                  providing eligible students with an opportunity to join and
                  benefit from the program's training and development
                  opportunities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Faq;
