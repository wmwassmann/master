import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 5173;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Thraximundar180_',
  database: 'portfolio-database'
});

// db.connect(err => {
//   if (err) {
//     console.log("Nope");
//     throw err;
//   }
//   console.log('Connected to Portfolio Database');
// });


app.get('/', (req, res) => {
  return res.json("Hello - this is the backend")
});


app.get('/portfolio/Tables/portfolio-items', (req, res) => { 
  const sql = "SELECT * FROM portfolio-items"
  db.query(sql, (err, data)=> {
    if(err) return res.json(err);
    return res.json(data);
  })
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));