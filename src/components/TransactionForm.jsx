// Import hook handel status local
import { useState } from "react"
import { useGlobalState } from "../context/GlobalState";


// Fuction transactionfrom
function TransactionForm() {

  const { addTransaction } = useGlobalState();
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);
  
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: 1,
      description,
      amount
    })
  };

  return (
    <div>

      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Enter to description"
          onChange={(e) => setDescription(e.target.value)} />
        <input type="number" step={0.01} placeholder="00.00"
          onChange={(e) => setAmount(e.target.value)} />
        <button>Add transaction</button>
      </form>

    </div>
  )
}

// Export component
export default TransactionForm