import React from "react";
import "./../scss/_homeAbout.scss";

import decoration from "../assets/Decoration.svg";
import people from "../assets/People.jpg";
import signature from "../assets/Signature.svg"

function HomeAbout() {
    return (
        <section className="homeAbout" id="homeAbout">
            <div className="about-text-section">
            <h2 className="home-header">O nas</h2>
            <img src={decoration} className="decor"/>
                <p className="about-par">
                    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                    Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img src={signature} className="signature"/>
        </div>
            <img src={people} className="people"/>
        </section>
    )
};


export default HomeAbout;