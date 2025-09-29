import StatsGraph from './components/StatsGraph';

const data = [
    { name: '', tasks: 0 },
    { name: 'Sunday', tasks: 1 },
    { name: 'Tuesday', tasks: 2 },
    { name: 'Wednesday', tasks: 2 },
    { name: 'Thursday', tasks: 3 },
    { name: 'Friday', tasks: 1 },
    { name: 'Saturday', tasks: 2 },
    { name: 'Sunday', tasks: 1 },
];

function App() {
    return (
        <>
            <StatsGraph data={data} />;
        </>
    );
}

export default App;
