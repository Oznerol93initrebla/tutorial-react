import './App.css'
import { WelcomeMessage } from './components/WelcomeMessage'
import { Counter } from './components/Counter'
import { RandomUser } from './components/RandomUser'

function App() {
  return (
    <>
    <WelcomeMessage message={'Hello World'} title={true}/>
    <WelcomeMessage/>
    <Counter start={1}/>
    <RandomUser />

    </>
  )
  }

export default App
