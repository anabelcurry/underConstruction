 import './App.css'
import tvAnimation from './assets/under-constructionTV.gif'

function App() {
  return (
    <>
      <div >
        <img src={tvAnimation} className="tv" alt="tv-animation" />
      </div>

      <div>
        <h1>more coming soon!</h1>
        <h2>new site under construction</h2>
      </div>

      <div className="card">
        <button 
          href="src/assets/anabel-curry-resume-2025.pdf"
          download="anabel-curry-resume-2025.pdf" 
        >
          download resume</button>
      </div>
    </>
  )
}

export default App
