import { LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

type StatsGraphProps = {
    data: { name: string; tasks: number }[];
};

function StatsGraph({ data }: StatsGraphProps) {
    return (
        <LineChart width={850} height={400} data={data} className="minimal-chart">
            <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#888" fontSize={13} />
            <YAxis
                axisLine={false}
                tickLine={false}
                stroke="#888"
                fontSize={12}
                tickFormatter={(value) => Math.round(value).toString()}
            />
            <Tooltip contentStyle={{ backgroundColor: 'white', border: 'none' }} />
            <Line type="monotone" dataKey="tasks" stroke="#8884d8" />
        </LineChart>
    );
}

export default StatsGraph;
