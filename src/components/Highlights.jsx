import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Highlights = () => {
    return (
        <section id="highlights">
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
                            <h3 className="highlight__subtitle"><span className="purple">Easy</span> & Quick</h3>
                            <p className="highlight__para">
                                Get access to the book you purchased online <span className="purple">instantly</span>
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="book-open" />
                            </div>
                            <h3 className="highlight__subtitle"><span className="purple">10,000+</span> books</h3>
                            <p className="highlight__para">
                                Library has books in <span className="purple">all</span> your <span className="purple">favorite</span> categories
                            </p>
                        </div>
                        <div className="highlight">
                            <div className="highlight__img">
                                <FontAwesomeIcon icon="tags" />
                            </div>
                            <h3 className="highlight__subtitle">Affordable</h3>
                            <p className="highlight__para">
                                Get books for as little as <span className="purple">$10</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Highlights