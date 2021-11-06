import Dance from './Dance'
import NodeProject from '../assets/images/project_logo.png'
import { Component } from 'react'

export const Portfolio = class Portfolio extends Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = "../assets/js/card"
    script.async = true
    document.body.appendChild(script)
  }
}

const Project = () => {
  return (
    <>
      <section id='portfolio' className='extra'>
        <div class='row section-intro'>
          <div class='col-twelve'>
            <h5>Portfolio</h5>
            <h1 style={{ color: '#00308f ' }}>Check Out Some of My Works.</h1>

            <p class='lead'>
              Lorem ipsum Do commodo in proident enim in dolor cupidatat
              adipisicing dolore officia nisi aliqua incididunt Ut veniam lorem
              ipsum Consectetur ut in in eu do.
            </p>
          </div>
        </div>

        <Dance
          minColor='rgba(0, 128, 0, 0.75)'
          maxColor='rgba(255, 255, 255, 0.75)'
          image={NodeProject}
          title='NODEJS MASTERY'
          description='Leart how to use Express, Nodejs and MongoDB to produce efficient Rest APIs.
                 including how to test them with Postman and finally securing them...'
          lang1='React'
          lang2='Node'
          lang3='MongoDB'
          lang4='Express'
          className='seperate'
        />
        <Dance
          minColor='rgba(0, 128, 0, 0.75)'
          maxColor='rgba(255, 255, 255, 0.75)'
          image={NodeProject}
          title='Trial'
          description='Loadnasjdnajsdaodas asdasldmlkda ahbdakjdns andjnasldnasl'
          lang1='React'
          lang2='Node'
          lang3='PHP'
          lang4='express'
          className='seperate'
        />
        <Dance
          minColor='rgba(0, 128, 0, 0.75)'
          maxColor='rgba(255, 255, 255, 0.75)'
          image={NodeProject}
          title='Trial'
          description='Loadnasjdnajsdaodas asdasldmlkda ahbdakjdns andjnasldnasl'
          lang1='React'
          lang2='Node'
          lang3='PHP'
          lang4='express'
          className='seperate'
        />
        <Dance
          minColor='rgba(0, 128, 0, 0.75)'
          maxColor='rgba(255, 255, 255, 0.75)'
          image={NodeProject}
          title='Trial'
          description='Loadnasjdnajsdaodas asdasldmlkda ahbdakjdns andjnasldnasl'
          lang1='React'
          lang2='Node'
          lang3='PHP'
          lang4='express'
          className='seperate'
        />
      </section>
    </>
  )
}

export default Project