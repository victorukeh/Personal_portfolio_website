import {Link} from "react-router-dom"
const About = () => {
  return (
    <>
      <section id='about'>
        <div className='row section-intro'>
          <div className='col-twelve'>
            <h5>About</h5>
            <h1 style={{color: "#00308f"}}>Let me introduce myself.</h1>

            <div className='intro-info'>
              <img src='images/profile-pic.jpg' alt=''/>

              <p className='lead'>
                Lorem ipsum Exercitation culpa qui dolor consequat exercitation
                fugiat laborum ex ea eiusmod ad do aliqua occaecat nisi ad irure
                sunt id pariatur Duis laboris amet exercitation veniam labore
                consectetur ea id quis eiusmod.
              </p>
            </div>
          </div>
        </div>

        <div className='row about-content'>
          <div className='col-six tab-full'>
            <h3 style={{color: "#00308f"}}>Profile</h3>
            <p>
              Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut
              esse in magna sint minim officia consectetur nisi commodo ea magna
              pariatur nisi cillum.
            </p>
            <br/>

            <ul className='info-list'>
              <li>
                <strong>Fullname:</strong>
                <span>Ukeh Victor Ugochukwu</span>
              </li>
              <li>
                <strong>Birth Date:</strong>
                <span>July 30, 2000</span>
              </li>
              <li>
                <strong>Job:</strong>
                <span>IT Support, Web Engineer</span>
              </li>
              <li>
                <strong>Website:</strong>
                <span>www.victorukeh.com</span>
              </li>
              <li>
                <strong>Email:</strong>
                <span>victorukeh1@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className='col-six tab-full'>
            <h3 style={{color: "#00308f"}}>Skills</h3>
            <p>
              Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut
              esse in magna sint minim officia consectetur nisi commodo ea magna
              pariatur nisi cillum.
            </p>

            <ul className='skill-bars'>
              <li>
                <div className='progress percent80'>
                  <span>80%</span>
                </div>
                <strong>NODEJS</strong>
              </li>
              <li>
                <div className='progress percent60'>
                  <span>60%</span>
                </div>
                <strong>REACT</strong>
              </li>
              <li>
                <div className='progress percent90'>
                  <span>90%</span>
                </div>
                <strong>MONGO</strong>
              </li>
              <li>
                <div className='progress percent35'>
                  <span>35%</span>
                </div>
                <strong>PHP</strong>
              </li>
              <li>
                <div className='progress percent75'>
                  <span>75%</span>
                </div>
                <strong>LINUX</strong>
              </li>
            </ul>
          </div>
        </div>

        <div class='row button-section'>
          <div class='col-twelve'>
            <Link to='/' className="button stroke smoothscroll">Hire Me</Link>
            <Link to='/' className="button button-primary">Download CV</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
