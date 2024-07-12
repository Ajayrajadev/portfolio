import './Education.css'

export default function Education() {
; 
  return (
    <>
    <div>
    <div >
        <h2 className="ps-3 p-sm-0">EDUCATION</h2>
        <div className="d-flex ps-3 p-sm-0">
          <div className="round"></div>
          <div className="line mt-1 ms-2"></div>
        </div>
      </div>
      {/* ***** Eduation start ******** */}
      <div className='education pb-3'>
      <div data-aos="flip-left">
          <h5 className='year'>Jun 2023-Present</h5>
          <h4>Full-Stack Development</h4>
          <h5>Self-Learning on YouTube and Udemy</h5>
          <p>Currently I am learnin Web Designing,HTML, CSS, JavaScript, Bootstrap, React JS, PHP, Laravel, SQL, Git and GitHub.</p>
         
        </div>
        <div data-aos="flip-right">
          <h5 className='year'>2020-2023</h5>
          <h4>BCA</h4>
          <h5>Valluvar College of Science and Management</h5>
          <p> Proficient in data structures and algorithms, Java programming and computer networking.</p>
        </div>
        <div data-aos="flip-left">
          <h5 className='year'>2018-2019</h5>
          <h4>HSC</h4>
          <h5>CSI Boys Higher Secondary School</h5>
          <p> Proficient in C programming, C++ programming, statistics, and operating systems.</p>
        </div>
        <div data-aos="flip-right">
          <h5 className='year' >2016-2017</h5>
          <h4>SSLC</h4>
          <h5>CSI Boys Higher Secondary School</h5>
          <p>Studied basics of computer science, programming languages, and mathematics. </p>
        </div>
        
      </div>
      {/* ******** Education end ********* */}
    </div> 
    </>
  );
}
