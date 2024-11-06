// Import the userGlobalState hook from the GlobalState context
import { useGlobalState } from "../context/GlobalState";

// We define the fuctional component balance
function Balance() {

  const data = useGlobalState();

  return (
    <div>
      <h1>Balance</h1>
      <div>
        {JSON.stringify(data)}
      </div> 
    </div>
  );
}
 // Export component balance
export default Balance