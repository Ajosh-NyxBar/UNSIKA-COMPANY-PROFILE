import "./about.css";
import React from "react";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";
const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="about" className="about-img" />
        <img src={play_icon} alt="play" className="play-icon" onClick={()=>setPlayState(true)}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>
          We Are Global Company <br />
          With Local Culture
        </h2>
        <p>
          Universitas Singaperbangsa karawang sebagai institusi Perguruan Tinggi
          mempunyai Visi, Misi dan Tujuan yang didasari nilai-nilai Religius,
          Patriotisme dan Kekaryaan yang berazaskan Pancasila dan Undang-Undang
          Dasar 1945, serta berpedoman kepada Tri Dharma Perguruan Tinggi. Tahun
          2010 telah meluluskan sarjana dan diploma sebanyak 7.041 orang,
          memiliki 8 Fakultas, 1 Program Pasca Sarjana dengan 18 Program Studi
          dan jumlah mahasiswa yang ada berjumlah 3.707 orang pada tahun 2010,
          jumlah mahasiswa baru pada tahun 2012 berjumlah 2.895 orang dan total
          mahasiswa pada tahun 2012 mencapai 10.000 lebih.
        </p>
      </div>
    </div>
  );
};

export default About;
