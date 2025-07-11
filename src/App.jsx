import './App.css'
import { WelcomeMessage } from './components/WelcomeMessage'
import { Counter } from './components/Counter'

function App() {
  return (
    <>
    <WelcomeMessage message={'Hello World'} title={true}/>
    <WelcomeMessage/>
    <Counter start = {1}/>
    </>
  )
  }

export default App
