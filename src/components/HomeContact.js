import React from "react";
import "./../scss/_HomeContact.scss";
import ContactForm from "./ContactForm";
import decoration from "../assets/Decoration.svg";
import formPic from "../assets/Background-Contact-Form.jpg";

function HomeContact() {
     return (
         <section className="homeContact" id="homeContact">
           {/*  <img src={formPic}/>*/}
             <div className="contact-form-section">
                 <h2 className="home-header">Skontaktuj się z nami</h2>
                 <img src={decoration} className="decor"/>
                 <ContactForm/>
             </div>
         </section>
     )
 }

 export default HomeContact;