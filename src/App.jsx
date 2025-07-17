import './App.css'
import tvAnimation from './assets/under-constructionTV.gif'
import resume from './assets/Anabel_Curry_QA engineer_resum.pdf'

function App() {
  return (
    <>
      <div >
        <img src={tvAnimation} className="tv" alt="tv-animation" />
      </div>

      <div>
        <h1>New Site Under Construction</h1>
        <h2>more coming soon!</h2>
      </div>

      <div className="card">
        <a 
          href={resume}
          download="anabel-curry-resume-2025.pdf" 
        >
          <button>download resume</button>
        </a>
                <a 
          href='https://www.linkedin.com/in/anabel-curry-28476b176/'
          target="_blank"
        >
          <button>linkedin</button>
        </a>        <a 
          href="https://www.mixcloud.com/anabelcurry/" 
          target='_blank'
        >
          <button>music?</button>
        </a>
      </div>
    </>
  )
}

export default App
