interface TransactionHistoriProps {
    appState: any[],
}

export const TransactionHistori: React.FC<TransactionHistoriProps> = ({ appState }) => {
    return (
        <div className="transaction__table">
            <h2>История операций</h2>
            <table>
                <thead>
                    <tr>
                        <th>Тип</th>
                        <th>Сумма</th>
                        <th>Дата</th>
                    </tr>
                </thead>
                <tbody>
                    {appState.map((transaction, i) => (
                        i < 18 &&
                        <tr key={transaction.id}>
                            <td>{transaction.type === 'WRITE_OFF' ? 'Списание' : 'Пополнение'}</td>
                            {transaction.type === 'WRITE_OFF' ? <td className="td-red">-{transaction.amount} BTKN</td> : <td className="td-green">+{transaction.amount} BTKN</td>}
                            <td width="100">{transaction.created_at.split('T')[0]}, {transaction.created_at.split('T')[1].split('.')[0]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}