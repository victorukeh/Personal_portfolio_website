import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../src/assets/css/main.css'
import '../src/assets/css/base.css'
import '../src/assets/css/fonts.css'
import '../src/assets/css/vendor.css'
import '../src/assets/css/project.css'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Project from './components/Project'
function App() {
  return (
    <Router>
      <div>
        <Header />
        <About/>
        <Resume/>
        <Project/>
      </div>
    </Router>
  )
}

export default App
