const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const app = express();
app.use(cors());
app.use(express.json());
app.use('/images', express.static('public/images'));

const db = mysql.createConnection({
  host: "localhost",
  user: "",
  password: "",
  database: "bookshop",
});

db.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected...");
});

app.post("/cart", (req, res) => {
  const { title, price, quantity, image } = req.body;
  const sql = "INSERT INTO cart (title, price, quantity) VALUES (?, ?, ?)";
  db.query(sql, [title, price, quantity], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Book added to cart" });
  });
});


app.get("/cart", (req, res) => {
  db.query("SELECT * FROM cart", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


app.get("/cart/count", (req, res) => {
  const sql = "SELECT SUM(quantity) AS total FROM cart";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ total: result[0].total || 0 });
  });
});


// Example Express route
app.delete('/cart/:id', (req, res) => {
  const id = req.params.id;
  // SQL: DELETE FROM cart WHERE id = ?
  db.query("DELETE FROM cart WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).send("Error deleting item");
    res.status(200).send("Item deleted");
  });
});

app.put('/cart/:id', (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;

  const sql = 'UPDATE cart SET quantity = ? WHERE id = ?';
  db.query(sql, [quantity, id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json({ message: "Quantity updated successfully" });
  });
});






























// Existing API: Get all history books
app.get("/api/books/history", (req, res) => {
  const sql = "SELECT * FROM book WHERE bookCategory = 'History'";
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// New API: Analysis data
app.get("/api/analysis", (req, res) => {
  // Total orders = count rows in orderitem
  const totalOrdersQuery = "SELECT COUNT(*) AS totalOrders FROM orderitem";

  // Top customer = customer with highest total orderQty in orderitem
  const topCustomerQuery = `
    SELECT c.customerName, SUM(o.orderQty) AS totalOrderQty
    FROM orderitem o
    JOIN customer c ON o.customerID = c.customerID
    GROUP BY c.customerName
    ORDER BY totalOrderQty DESC
    LIMIT 1
  `;

  // Book sales = sum quantities grouped by bookName
  const bookSalesQuery = `
    SELECT b.bookName, SUM(o.orderQty) AS totalSold
    FROM orderitem o
    JOIN book b ON o.productID = b.productID
    GROUP BY b.bookName
    ORDER BY totalSold DESC
    LIMIT 5
  `;

  // Stationery sales = sum quantities grouped by brand
  const stationerySalesQuery = `
    SELECT s.brand, SUM(o.orderQty) AS totalSold
    FROM orderitem o
    JOIN stationeryitem s ON o.productID = s.productID
    GROUP BY s.brand
    ORDER BY totalSold DESC
    LIMIT 5
  `;

  // Educational tool sales = sum quantities grouped by educationalToolName
  const toolSalesQuery = `
    SELECT e.educationaToolName, SUM(o.orderQty) AS totalSold
    FROM orderitem o
    JOIN educationtool e ON o.productID = e.productID
    GROUP BY e.educationaToolName
    ORDER BY totalSold DESC
    LIMIT 5
  `;

  Promise.all([
    new Promise((resolve, reject) =>
      db.query(totalOrdersQuery, (err, results) => (err ? reject(err) : resolve(results)))
    ),
    new Promise((resolve, reject) =>
      db.query(topCustomerQuery, (err, results) => (err ? reject(err) : resolve(results)))
    ),
    new Promise((resolve, reject) =>
      db.query(bookSalesQuery, (err, results) => (err ? reject(err) : resolve(results)))
    ),
    new Promise((resolve, reject) =>
      db.query(stationerySalesQuery, (err, results) => (err ? reject(err) : resolve(results)))
    ),
    new Promise((resolve, reject) =>
      db.query(toolSalesQuery, (err, results) => (err ? reject(err) : resolve(results)))
    ),
  ])
    .then(([totalOrders, topCustomer, bookSales, stationerySales, toolSales]) => {
      res.json({
        totalOrders,
        topCustomer,
        bookSales,
        stationerySales,
        toolSales,
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch analysis data" });
    });
});


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
