import express from 'express'
import 'dotenv/config'

const port  = process.env.PORT || 8000;

const app = express()
app.use(express.json());

app.post('/add', (req, res) => {
   let { a, b } = req.body;
   a = parseInt(a);
   b = parseInt(b);
   const sum = a + b;
   return res.status(200).json({ sum: sum });
})


app.listen(port, () => {
   console.log("Running..")
})