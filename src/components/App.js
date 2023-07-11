import "../style/App.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Studies", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-h1">Получилось!</h1>
      </header>
      <main className="App-main">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />
      </main>
    </div>
  );
}

export default App;
