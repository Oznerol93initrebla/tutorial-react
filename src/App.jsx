import './App.css'
import { WelcomeMessage } from './components/WelcomeMessage'

function App() {
  return (
    <>
    <WelcomeMessage message={'Hello World'} title={true}/>
    <WelcomeMessage/>
    </>
  )
  }

export default App
