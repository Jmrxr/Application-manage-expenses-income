// Import GlobalProvider handle application
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";

// Fuction main application
function App() {
  return (
    // Render components
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>App react</h1>
    </GlobalProvider>    
  )
}
// Export components App be used by other parts of the application
export default App