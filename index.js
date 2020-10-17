const express = require('express')

const bodyParser =require('body-parser')
const cors = require('cors')
const port = 5000

const app = express()
app.use(cors());
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user123@cluster0.44y2k.mongodb.net/creative?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });
client.connect(err => {
  const service = client.db("creative").collection("service");
 app.post('/addService', (req , res)=>{
     const newService = req.body
        service.insertOne(newService)
        .then(result =>{
            res.send(result.insertedCount > 0)
        })
 })
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})