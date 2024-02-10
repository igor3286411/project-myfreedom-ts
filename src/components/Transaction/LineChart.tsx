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
    const pdata: any = []
    appState.length > 0 && appState.map((transaction, i) => (i < 10 && pdata.push({
        name: `${transaction.created_at.split('T')[0]}`,
        BTKN: transaction.amount,
    })))


    return (
        <ResponsiveContainer width="150%" aspect={3}>
            <LineChart data={pdata} margin={{ right: 300 }}>
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