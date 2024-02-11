import { useRef } from "react";
import {
    LineChart,
    ResponsiveContainer,
    Legend,
    Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
} from "recharts";

interface ChartProps {
    appState: any[],
}

export const Chart: React.FC<ChartProps> = ({ appState }) => {
    const windowWidth = useRef(window.innerWidth);
    const pdata: any = []
    appState.length > 0 && appState.map((transaction) => pdata.push({
        name: `${transaction.created_at.split('T')[0]}`,
        BTKN: transaction.amount,
    }))

    return (
        <ResponsiveContainer minWidth={windowWidth.current < 450 ? 330 : 400} height="100%" aspect={2}>
            <LineChart data={pdata}>
                <CartesianGrid />
                <XAxis dataKey="name" interval={"preserveStartEnd"} />
                <YAxis></YAxis>
                <Legend />
                <Tooltip />
                <Line
                    stroke="black"
                    activeDot={{ r: 8 }}
                />
                <Line dataKey="BTKN" stroke="blue" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}