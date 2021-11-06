import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <section id='intro'>
        <div className='intro-overlay'></div>

        <div className='intro-content'>
          <div className='row'>
            <div className='col-twelve'>
              <h5>Hello, You.</h5>
              <h1>My Name is Ukeh Victor .U.</h1>
              {/* <h1>MY NAME IS UKEH VICTOR .U.</h1> */}

              <p className='intro-position'>
                <span>MERN Stack Developer</span>
                <span>Aspiring Security Specialist</span>
                <span>IT Engineer</span>
              </p>
              <br />
             
              <Link to='/' className='button stroke smoothscroll'>
              More About Me
              </Link>
            </div>
          </div>
        </div>

        <ul className='intro-social'>
          <Link to='/'>
            <i className='fa fa-facebook'></i>
          </Link>

          <Link to='/'>
            <i className='fa fa-twitter'></i>
          </Link>

          <Link to='/'>
            <i className='fa fa-instagram'></i>
          </Link>

          <Link to='/'>
            <i className='fa fa-linkedin-square'></i>
          </Link>

          <Link to='/'>
            <i className='fa fa-google'></i>
          </Link>
        </ul>
      </section>
    </>
  )
}

export default Header
