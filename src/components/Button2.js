import {Link} from "react-router-dom"
const Button = ({ framework }) => {
  return (
    <>
      {/* <button>{framework}</button> */}
      <Link to='/'> {framework}</Link>
    </>
  )
}

export default Button
