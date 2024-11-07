import { useGlobalState } from '../../context/GlobalState'

// Define a fuctional component named TransactionList
function TransactionList() {
    const { transactions, deleteTransaction } = useGlobalState()

    return (
        <div>{
            transactions.map(transaction => (
                <div key={transaction.id}>
                    <p>{transaction.description}</p>
                    <span>{transaction.amount}</span>

                    <button onClick={() => {
                        deleteTransaction(transaction.id)
                    }}>
                        Delete
                    </button>
                </div>
            ))
        }</div>
    )
}

// Export the TransactionList component for use in other parts of the application
export default TransactionList