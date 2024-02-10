import axios from "axios";
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect, useState } from 'react';
import { TransactionUserMenu } from "./TransactionUserMenu";
import './transaction.scss'

export const Transaction = () => {
  const { transactions } = useTypedSelector(state => state.todo)
  const { transaction, id, email } = transactions
  const [appState, setAppState] = useState([]);

  useEffect(() => {
    const apiUrl = `https://test.gefara.xyz/api/v1/user/${id}/transactions`;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setAppState(allPersons);
    });
  }, [transaction, id]);

  return (
    <Slide direction="left" in={transaction} mountOnEnter unmountOnExit>
      <Paper sx={{ maxWidth: "470px", position: "absolute", right: 1, top: 1, borderRadius: "0", backgroundColor: "#121825" }} elevation={4}>
        <TransactionUserMenu email={email} appState={appState} />
      </Paper>
    </Slide>
  );
}