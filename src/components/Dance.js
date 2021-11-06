import React, {useRef} from "react";
import { Link } from 'react-router-dom'
import Button from './Button2'
const Dance = ({
  image,
  title,
  description,
  lang1,
  lang2,
  lang3,
  lang4,
  minColor,
  maxColor,
}) => {
  
  const cardRef = useRef();
  const handleMouseMove = (e) => {
//     The rest of your code goes here
//     Something like what you have in card.js
//     Maybe
    
    let xAxis = (window.innerwidth / 2 - e.pageX) /25;
    let yAxis = (window.innerwidth / 2 - e.pageY) /5;
    card.current.getElementsByClassName.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
  }
  
  return (
      <div onMouseMove={(e) => handleMouseMove(e) } className='container2'>
        <div ref={cardRef} className='card2'>
          <div class='logo2'>
            <div
              class='circle'
              style={{
                background: `linear-gradient(to right, ${minColor}, ${maxColor})`,
              }}
            ></div>
            <img src={image} alt='logo' />
          </div>
          <div className='info2'>
            <h1 className='title'>{title}</h1>
            <h3>{description}</h3>
            <div className='technologies2'>
              {lang1.length > 0 && <Button framework={lang1} />}
              {lang2.length > 0 && <Button framework={lang2} />}
              {lang3.length > 0 && <Button framework={lang3} />}
              {lang4.length > 0 && <Button framework={lang4} />}
            </div>
            <div className='visit2'>
              <Link to='/'>VISIT</Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dance
