import Main from './components/Main'
import { MovieContextProvider } from './context/MovieContext'

function App() {
  return (
    <>
      <MovieContextProvider>
        <Main />
      </MovieContextProvider>
    </>
  );
}

export default App;