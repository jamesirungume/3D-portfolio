import {BrowserRouter} from 'react-router-dom'

import {About, Contact, Experience, Feedbacks, Hero, Navbar, 
Tech, Works, StarsCanvas} from './components'



const App = () => {


  return (
    <BrowserRouter>
    
       <div className = "relative z-0 bg-primary  ">
        <div className='bg-hero-pattern bg-cover
        bg-no-repeat bg-centre'>
          <Navbar/>
          <Hero/>
        </div>
       <About id ="About"/>
       <Experience id ="Experience"/>
       <Tech/>
       <Works id ="Work"/>
       <Feedbacks/>
       <div className='relative z-0'>
          <Contact id ="Contact"/>
          <StarsCanvas/>
       </div>

       </div>
    </BrowserRouter>
  )
}

export default App
