import PersonCard from './components/InfoCard'
import './App.css'

function App() {
  return (
    <div className="App">
      <PersonCard firstName='Pablo' lastName='Diez' age={ 32 } hairColor='Brown' />
      <PersonCard firstName='Luisa' lastName='Maria' age={ 27 } hairColor='Black' />
      <PersonCard firstName='KanYe' lastName='West' age={ 45 } hairColor='Brown' />
      <PersonCard firstName='Dame' lastName='Time' age={32 } hairColor='Blonde' />
    </div>
  )
}

export default App;