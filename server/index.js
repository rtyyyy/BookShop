import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'
const port = 3005; 
const app = express()


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'get, post, put, delete');  //деф от ошибки CORS//
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

    const books = 
  [
    { id: "1", title: "Joy at work", author: "Marie Condo" , price : "22.99$" , img:"/images/JoyAtWork.jpg" , age:"12+" , release:2020, pages:300 ,description:"  Lorem ipsum, dolor sit amet consectetus animi dolor? Dolorum ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "2", title: "Such a fun age", author: "Kiley Reid" , price : "16.99$" , img:"/images/funAge.jpg" , age:"16+" , release:2022 , pages:400 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "3", title: "Brief answers", author: "Stephen Hawking" , price : "16.50$"  , img:"/images/briefAnswers.jpg", age:"16+", release:2019,pages:350 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicingm ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "4", title: "The death of Jesus", author: "J.M. Coetzee" , price : "19.99$" , img:"/images/theDeath.jpg", age:"16+" , release:2020, pages:390 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde ium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "5", title: "The Discomfort", author: "Marieke Lukas" , price : "19.99$" , img:"/images/theDiscomfort.jpg" , age:"12+" , release:2021, pages:210 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id per"},
    { id: "6", title: "Surrounded by idiots", author: "Thomas Erikson" , price : "13.99$" , img:"/images/surrounded.jpg", age:"16+" , release:2020, pages:600 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id p"},
    { id: "7", title: "Atomic habits", author: "James Clear" , price : "18.99$" , img:"/images/atomicHabits.jpg" , age:"12+", release:2020, pages:700,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "}
    
  ] 
  const artBooks = [
    { id: "1", title: "The Architecture of Happiness", author: "Alain de Botton" , price : "16.99$" , img:"/images/artOfHapiness.jpg" , age:"12+" , release:2006, pages:355 ,description:"  Lorem ipsum, dolor sit amet consectetus animi dolor? Dolorum ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "2", title: "The Story of Art ", author: "E.H. Gombrich" , price : "17.99$" , img:"/images/artStory.jpg" , age:"16+" , release:1950 , pages:700 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "3", title: "The Language of Post-Modern Architecture", author: "Charles Jencks" , price : "15.50$"  , img:"/images/postModernStory.jpg", age:"16+", release:1977,pages:600 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicingm ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "4", title: "The Bauhaus", author: "Herbert Bayer" , price : "20.99$" , img:"/images/theBauhaus.jpg", age:"16+" , release:1928, pages:510 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde ium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "5", title: "The Seven Lamps of Architecture", author: " John Ruskin" , price : "25.99$" , img:"/images/sevenLampsArchit.jpg" , age:"12+" , release:1889, pages:760 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id per"},
    { id: "6", title: "A History of Architecture: Settings and Rituals", author: "Spiro Kostof" , price : "16.99$" , img:"/images/settingsRituals.jpg", age:"16+" , release:1995, pages:600 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id p"},
    { id: "7", title: "The Architecture of Community", author: " Leon Krier" , price : "18.99$" , img:"/images/historyCommunity.jpg" , age:"12+", release:1998, pages:720,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "},
    { id: "8", title: "The Death and Life of Great American Cities", author: "Jane Jacobs" , price : "18.99$" , img:"/images/death&life.png" , age:"16+" , release:1961, pages:820 ,description:"  Lorem ipsum, dolor sit amet consectetus animi dolor? Dolorum ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "9", title: "The Power of Limits ", author: "Gyorgy Doczi" , price : "17.99$" , img:"/images/powerLimits.jpg" , age:"16+" , release:1909 , pages:700 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "10", title: "Delirious New York", author: "Rem Koolhaas" , price : "17.50$"  , img:"/images/DelirousNewYork.png", age:"12+", release:1978,pages:600 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicingm ab laudantium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "11", title: "The Architecture of Frank Lloyd Wright ", author: "William Allin Storrer" , price : "26.99$" , img:"/images/FrankLloydWright.jpg", age:"16+" , release:2001, pages:710 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde ium reiciendis dolore odio reprehenderit ipsum aut quibusdam!"},
    { id: "12", title: "Towards a New Architecture", author: " Le Corbusier" , price : "20.99$" , img:"/images/towardNewArt.jpg" , age:"12+" , release:1927, pages:760 ,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id per"},
    { id: "14", title: "The Architecture of the Italian Renaissance", author: "Peter Murray" , price : "13.99$" , img:"/images/ItalianRen.jpg" , age:"12+", release:1966, pages:720,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "},
    { id: "15", title: "Complexity and Contradiction ", author: "Robert Venturi" , price : "18.99$" , img:"/images/comp&cont.jpg" , age:"12+", release:1923, pages:720,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "},
    { id: "16", title: "Learning from Las Vegas", author: "Robert Venturi" , price : "19.99$" , img:"/images/learnLasVegas.jpg" , age:"12+", release:1972, pages:720,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "}
  ]
  
  app.get('/arts', function(req, res) {
  const limit = req.query.limit; // получаем значение параметра limit из запроса//
  const pageNumber = req.query.page; // получаем значение параметра page из запроса//
  
  const art = artBooks.slice((pageNumber-1)*limit, pageNumber*limit)
  // console.log(pageNumber)
  // console.log(limit)
  // console.log(art)
  if (art) {
    res.json(art); 
  } else {
    res.status(404).send('Book not found'); 
  }
});


  app.get('/artBooks/:id', (req, res) => {
    const bookId = req.params.id;  //вытягивает id //
    const book = artBooks.find( (item)=>  `${item.id}` === `${bookId}`)  //собирает все id из массива artBooks//
    if (book.id === bookId) {
      res.json(book); 
    } else {
      res.status(404).send('Book not found'); 
    }                  
  });




  app.get('/book/', (req, res) => {
    res.json(books);                   //добавляет весь массив на страницу//
  });

   app.get('/book/:id', (req, res) => {
    const bookId = req.params.id;  //вытягивает id //
    const book = books.find( (item)=>  `${item.id}` === `${bookId}`)  //собирает все id из массива//
    if (book.id === bookId) {
      res.json(book); 
    } else {
      res.status(404).send('Book not found'); 
    }
  });

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

 

