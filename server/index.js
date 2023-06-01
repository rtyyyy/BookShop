import express from 'express'
import fs from 'fs'
import bodyParser from 'body-parser'
const port = 3005; 
const app = express()
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
  app.get('/book', (req, res) => {
    const book = 
  [
    { id: 1, title: "Joy at work", author: "Marie Condo" , price : "22.99$" , img:"/images/JoyAtWork.jpg" , age:"12+" , release:2020, pages:300 ,description:"  Lorem ipsum, dolor sit amet consectetus animi dolor? Dolorum ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: 2, title: "Such a fun age", author: "Kiley Reid" , price : "16.99$" , img:"/images/funAge.jpg" , age:"16+" , release:2022 , pages:400 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: 3, title: "Brief answers", author: "Stephen Hawking" , price : "16.50$"  , img:"/images/briefAnswers.jpg", age:"16+", release:2019,pages:350 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicingm ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: 4, title: "The death of Jesus", author: "J.M. Coetzee" , price : "19.99$" , img:"/images/theDeath.jpg", age:"16+" , release:2020, pages:390 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde ium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: 5, title: "The Discomfort", author: "Marieke Lukas" , price : "19.99$" , img:"/images/theDiscomfort.jpg" , age:"12+" , release:2021, pages:210 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id per"},
    { id: 6, title: "Surrounded by idiots", author: "Thomas Erikson" , price : "13.99$" , img:"/images/surrounded.jpg", age:"16+" , release:2020, pages:600 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id p"},
    { id: 7, title: "Atomic habits", author: "James Clear" , price : "18.99$" , img:"/images/atomicHabits.jpg" , age:"12+", release:2020, pages:700,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "}
    
  ] 
    // Рендерим шаблон и передаем в него данные
    const a = res.render('book', { book: book });
    console.log(a)
  });
  
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'get, post, put, delete');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
  app.get('/book', (req, res) => {
    fs.readFile('index.js', 'utf8', (err, book) => {
      res.json(book)
    });
  });

  //  маршрут для обработки POST-запроса
app.post('/book', (req, res) => {
  const book = req.body.book; // Получаем данные из тела запроса
  console.log(book); 
});
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });


  

// app.get('/data', (req, res) => {
//     const data = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
//     res.send(data);
//   });
  
//   app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
//   });