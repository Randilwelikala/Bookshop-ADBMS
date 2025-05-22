import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Analysis.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Analysis = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/analysis")
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="loading">Loading analysis...</p>;

  return (
    <div className="analysis-container">
      <h1>📊 Sales & Order Analysis</h1>

      <div className="stat-boxes">
        <div className="stat-box">
          <h2>Total Orders</h2>
          <p>{data.totalOrders[0]?.totalOrders || 0}</p>
        </div>
        <div className="stat-box">
          <h2>Top Customer</h2>
          <p>{data.topCustomer[0]?.customerName || "N/A"}</p>
        </div>
      </div>

      <div className="chart-section">
        <h3>Book Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.bookSales} margin={{ top: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalSold" fill="#8884d8" name="Books Sold" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h3>Stationery Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.stationerySales} margin={{ top: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="brand" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalSold" fill="#82ca9d" name="Stationery Sold" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-section">
        <h3>Educational Tool Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.toolSales} margin={{ top: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="educationaToolName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalSold" fill="#ffc658" name="Tools Sold" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analysis;
