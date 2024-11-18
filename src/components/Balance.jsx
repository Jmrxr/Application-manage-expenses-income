// Import the userGlobalState hook from the GlobalState context
import { useGlobalState } from "../context/GlobalState";

// We define the fuctional component balance
function Balance() {

  const {transactions} = useGlobalState();

  const amounts =  transactions.map(transaction => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <div>
      <h3>Your Balance</h3>
      <h1>${total}</h1>
      <div>
      </div> 
    </div>
  );
}
 // Export component balance
export default Balance