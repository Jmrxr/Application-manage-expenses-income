import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <h1>App react</h1>
    </GlobalProvider>    
  )
}

export default App