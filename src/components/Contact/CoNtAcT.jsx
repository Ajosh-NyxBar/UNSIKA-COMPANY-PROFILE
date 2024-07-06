import "./coNtAcT.css";
import React from "react";
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-48.png";
import phoneIcon from "../../assets/phone-30-48.png";
import locationIcon from "../../assets/location-48.png";
import whiteArrow from "../../assets/white-arrow.png";
const CoNtAcT = () => {
  return (
    <div className="coNtAcT">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msgIcon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
          suscipit magni hic nesciunt vel tempora veritatis doloremque expedita
          culpa fugit officiis commodi accusantium repellat, quibusdam ipsum
          minima, illum deserunt sapiente nostrum sequi amet? Laboriosam atque
          tempora quaerat qui laborum reprehenderit iusto optio dolores soluta
          iure ullam cupiditate, natus ducimus molestias.
        </p>
        <ul>
          <li>
            <img src={mailIcon} alt="" />
            email@gmail.com
          </li>
          <li>
            <img src={phoneIcon} alt="" />
            +91 1234567890
          </li>
          <li>
            <img src={locationIcon} alt="" />
            Jl. Imam Bonjol, Kec. Kedungkandang, Kabupaten Bogor, <br />
            Jawa Barat 16123
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            required
          />
          <label htmlFor="">Write your message</label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Write your message"
            required
          ></textarea>
          <button type="submit" name="btn" className="btn">Send Message <img src={whiteArrow} alt="" /></button>
        </form>
        <span></span>
      </div>
    </div>
  );
};

export default CoNtAcT;
