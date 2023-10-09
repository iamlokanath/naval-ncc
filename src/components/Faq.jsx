import React from 'react'
import './Faq.css'
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
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            FAQ Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto dolores suscipit enim quos iusto soluta impedit, culpa modi fuga aliquid ullam autem eos! Labore eligendi error aliquid fugiat eius?
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            FAQ Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet ratione voluptatibus, dolore earum ex quisquam rerum accusantium sequi suscipit, deserunt quidem? Laborum amet quis, est optio minus deserunt perferendis.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            FAQ Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, rem? Laborum doloribus corporis error dolorum vel rem expedita distinctio fugiat perferendis sed similique dicta sapiente, suscipit dolores voluptatibus cupiditate praesentium.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            FAQ Item #4``
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, rem? Laborum doloribus corporis error dolorum vel rem expedita distinctio fugiat perferendis sed similique dicta sapiente, suscipit dolores voluptatibus cupiditate praesentium.
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            FAQ Item #5
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, rem? Laborum doloribus corporis error dolorum vel rem expedita distinctio fugiat perferendis sed similique dicta sapiente, suscipit dolores voluptatibus cupiditate praesentium.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    </>
  )
}

export default Faq
