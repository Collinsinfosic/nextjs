const pool = require('../db');

export default async function handler(req, res) {
  try {
    const [rows] = await pool.query('SELECT * FROM your_table_name');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}