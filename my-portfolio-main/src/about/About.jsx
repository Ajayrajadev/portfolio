import "./About.css";
import sumitwo from "../assets/sumi2.png";

export default function About() {
  return (
    <>
      {/* abouut us */}
      <div className="about cd ">
        <h2>ABOUT ME</h2>
        <div className="d-flex ">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
        <div>
        {/* image start */}
          <div className="d-flex justify-content-center d-block d-lg-none">
            <div className="imgdiv">
              <img
                src={sumitwo}
                className="img-fluid"
                style={{ borderRadius: "50%" }}
              ></img>
            </div>
          </div>
          {/* image end */}

          <div>
            <p className="text-white mt-4 summary aboutme">
              Hello! I'm Ajay Raja, a passionate fUll stack developer eager to
              make my mark in the world of web development. With a strong
              foundation in HTML, CSS, and JavaScript,Bootstrap and React, along 
              familiarity with PHP,Laravel I'm excited to bring my skills to the
              forefront and contribute to innovative projects.
            </p>
          </div>
          <div>
            <div className="d-flex flex-column text-white">
              <p>
                <span>Name :</span>Ajay</p>
              <p>
                <span>Degree :</span>BCA
              </p>
            </div>
            <div className="text-white">
              <p><span>Phone :</span>+91 8825964769</p>
              <p><span>Email :</span>ajayraja.dev@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
