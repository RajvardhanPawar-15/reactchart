import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function App() {
  return (
    <>
      <h1 className="text-center text-2xl py-3 font-bold">
        React and Chart js
      </h1>
      <div className="my-10 grid px-6 grid-cols-3 gap-4">
        <div className="chart-1 col-span-2 max-4-xl rounded p-6 border-2 border-gray-600">
          <h3 className="text-sm font-bold">Chart No 1</h3>
          <div className="h-80 chart mt-10">
            <Bar
              data={{
                labels: ["A", "B", "C", "D", "E"],
                datasets: [
                  {
                    label: "Sales",
                    data: [100, 200, 300, 400, 500],
                    backgroundColor: ["rgba(225,225,225, 0.5)"],
                  },
                ],
              }}
            />
          </div>
        </div>
        <div className="chart-2 col-span-1 max-4-xl rounded p-6 border-2 border-gray-600">
          <h3 className="text-sm font-bold">Chart No 1</h3>
          <div className="h-80 chart mt-10">
            <Line
              data={{
                labels: ["A", "B", "C", "D", "E"],
                datasets: [
                  {
                    label: "Sales",
                    data: [100, 20, 300, 40, 500],
                  },
                ],
              }}
            />
          </div>
        </div>

        <div className="chart-2  max-4-xl rounded p-6 border-2 border-gray-600">
          <h3 className="text-sm font-bold">Chart No 2</h3>
          <div className="h-80 chart mt-10">
            <Doughnut
              data={{
                labels: ["A", "B", "C", "D", "E"],
                datasets: [
                  {
                    label: "Sales",
                    data: [100, 200, 300, 400, 500],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
