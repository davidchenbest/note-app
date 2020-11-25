
import './App.css';
import DarkMode from './components/DarkMode'
import NoteContainer from './components/NoteContainer'
import DarkProvider from './contexts/DarkContext'

function App() {
  return (
    <>
      <DarkProvider>
        <DarkMode></DarkMode>
        <NoteContainer></NoteContainer>
      </DarkProvider>
    </>
  );
}

export default App;
