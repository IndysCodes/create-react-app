import React from "react";
import "./App.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import Project from "./project";

const App = () => {
  const data = [
    { name: "Rent", Money: 2000 },
    { name: "Groceries", Money: 1000 },
    { name: "Phone Bill", Money: 200 },
    { name: "Utilities", Money: 500 },
    { name: "Car Insurance", Money: 400 },
    { name: "Remaining", Money: 700 },
  ];

  return (
    <div style={{ textAlign: "left" }}>
      <h1>Income and Expense</h1>
      <div className="App">

<form>
  <label>
    Input Number:
    <input type="text" name="name" />
  </label>
    <input type="submit" value="Submit" />
</form>



        <PieChart width={400} height={400}>
          <Pie
          
            dataKey="Money"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#50a22a"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="Money" fill="#50a22a" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
      <Project />
    </div>
  );
};

export default App;