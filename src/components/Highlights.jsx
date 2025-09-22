import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Highlights = () => {
    return (
        <section id="Highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why Choose <span className="purple">library</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="bolt" />
                            </div>
                            <h3 className="highlight__subtitle">Easy & Quick</h3>
                            <p className="highlight__para">
                                Get access to the book you purchased online <span className="purple">instantly</span>
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="book-open" />
                            </div>
                            <h3 className="highlight__subtitle">Easy & Quick</h3>
                            <p className="highlight__para">
                                Get access to the book you purchased online <span className="purple">instantly</span>
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="tags" />
                            </div>
                            <h3 className="highlight__subtitle">Easy & Quick</h3>
                            <p className="highlight__para">
                                Get access to the book you purchased online <span className="purple">instantly</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights