import './App.css'
import PassEntry from './components/PassEntry'

const App = () => {
  const a = 'a'
  return (
    <div className="mainCont">
      <img
        className="imagelogo"
        alt="app logo"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
      />
      <div className="mainCard">
        <PassEntry />
      </div>
    </div>
  )
}
export default App
