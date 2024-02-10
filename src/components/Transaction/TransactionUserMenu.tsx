import { useDispatch } from "react-redux";
import { TodoActionTypes } from "../../types/todo";

interface TransactionUserMenuProps {
    email: string,
    appState: any[],
}

export const TransactionUserMenu: React.FC<TransactionUserMenuProps> = ({ email, appState }) => {
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch({
            type: TodoActionTypes.SET_TRANSACTION,
            payload: {
                transaction: false, id: '', email: '',
            },
        });
    };

    return (
        <div className="transaction">
            <div className="transaction-top">
                <h2>{email}</h2>
                <button onClick={() => handleChange()}></button>
            </div>
            <div className="transaction-chart">
                <h2>Использование токенов</h2>
            </div>
            {appState.map((transaction, i) => (
                i < 10 &&
                <p key={transaction.id}>{transaction.type} {transaction.amount} {transaction.created_at}</p>
            ))}
        </div>
    )
}