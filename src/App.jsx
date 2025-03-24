import {Navbar} from './components/navbar/Navbar.jsx'
import {Footer} from './components/footer/Footer.jsx'
import {Hero} from './components/Sections/Hero.jsx'
import {About} from './components/Sections/About.jsx'
import {SkillCard} from './components/Sections/SkillCard.jsx'
import {Resume} from './components/Sections/Resume.jsx'
import {Projects} from './components/Sections/Projects.jsx'
import {Contact} from './components/Sections/Contact.jsx'
import { Test } from './components/Test.jsx'

function App() {
  return (
    <section >

      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="hero flex flex-col items-center">
        <Hero />
        <About />
        <div className="Skilss grid grid-cols-4">
        <SkillCard head={"HTML"} description={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem."} progressValue={90} />
        <SkillCard head={"Tailwind"} description={"Nemo enim ipsam voluptatem quia voluptas sit aspernatur."} progressValue={80} />
        <SkillCard head={"JavaScript"} description={"Neque porro quisquam est qui dolorem ipsum quia dolor."} progressValue={80} />
        <SkillCard head={"ExpressJS"} description={"ExpressJS used to handle Server site requests"} progressValue={70} />
        <SkillCard head={"MongoDB"} description={"MOngoDB is a Database that store the data"} progressValue={80} /> 
        </div>
        <Resume />
        <Projects />
        <Contact />
        <Footer />
      </div>
      
      {/* <Test /> */}
    </section>
  )
}

export default App
