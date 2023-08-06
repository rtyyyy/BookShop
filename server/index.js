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
    { id: "13", title: "The Architecture of the Italian Renaissance", author: "Peter Murray" , price : "13.99$" , img:"/images/ItalianRen.jpg" , age:"12+", release:1966, pages:720,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "},
    { id: "14", title: "Complexity and Contradiction ", author: "Robert Venturi" , price : "18.99$" , img:"/images/comp&cont.jpg" , age:"12+", release:1923, pages:720,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "},
    { id: "15", title: "Learning from Las Vegas", author: "Robert Venturi" , price : "19.99$" , img:"/images/learnLasVegas.jpg" , age:"12+", release:1972, pages:720,description:"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi mollitia unde id perferendis "}
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







  const childBooks = [
    { id: "1", title: "The Cat in the Hat", author: "Dr. Seuss" , price : "11.99$" , img:"/images/catInHat.png" , age:"0+" , release:1957, pages:61 ,description:" A dreary day turns into a wild romp when this beloved story introduces readers to the Cat in the Hat and his troublemaking friends, Thing 1 and Thing 2. A favorite among kids, parents and teachers, this story uses simple words and basic ryhme to encourage and delight beginning readers."},
    { id: "2", title: "Where the Wild Things Are", author: "Maurice Sendak" , price : "11.99$" , img:"/images/wildThings.png" , age:"0+" , release:2012 , pages:48 ,description:"This iconic story has inspired a movie, an opera, and the imagination of generations. When Max dresses in his wolf suit and causes havoc in the house, his mother sends him to bed. From there, Max sets sail to an island inhabited by the Wild Things, who name him king and share a wild rumpus with him. But then from far away across the world, Max smells good things to eat..."},
    { id: "3", title: "Curious George", author: " Margret Rey" , price : "10.50$"  , img:"/images/curiousGeorge.png", age:"0+", release:2016,pages:64 ,description:"This treasured classic is where it all began for the curious, loveable monkey. Special anniversary cover with foil and spot gloss make this edition a must-have for any children’s book collection."},
    { id: "4", title: "The Giving Tree", author: " Shel Silverstein" , price : "6.99$" , img:"/images/givingThree.png", age:"0+" , release:1964, pages:57 ,description:"So begins a story of unforgettable perception, beautifully written and illustrated by the gifted and versatile Shel Silverstein. This moving parable for all ages offers a touching interpretation of the gift of giving and a serene acceptance of another's capacity to love in return."},
    { id: "5", title: "Charlotte's Web", author: "E.B. White" , price : "10.99$" , img:"/images/charWeb.png" , age:"0+" , release:2012, pages:184 ,description:"Some Pig. Humble. Radiant. These are the words in Charlotte's Web, high up in Zuckerman's barn. Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter."},
    { id: "6", title: "The Very Hungry Caterpilla", author: " Eric Carle " , price : "3.99$" , img:"/images/veryHungry.png", age:"0+" , release:1994, pages:26 ,description:"Featuring interactive die-cut pages, this board book edition is the perfect size for little hands and great for teaching counting and days of the week."},
    { id: "7", title: "Green Eggs and Ham", author: "Dr. Seuss" , price : "7.99$" , img:"/images/greenEggs.png" , age:"0+", release:1960, pages:65,description:"With unmistakable characters and signature rhymes, Dr. Seuss’s beloved favorite has cemented its place as a children’s classic. Kids will love the terrific tongue-twisters as the list of places to enjoy green eggs and ham gets longer and longer...and they might even learn a thing or two about trying new things! "},
    { id: "8", title: "Corduroy", author: "Don Freeman" , price : "3.99$" , img:"/images/corduroy.png" , age:"0+" , release:2008, pages:40 ,description:"In 1968, a girl named Lisa fell in love with a little brown bear wearing green overalls with one button missing, and thousands of readers followed suit, making Corduroy one of the best-loved children's books of all time. Now, forty years later, Viking proudly celebrates Don Freeman's classic with a very special anniversary edition. With an extra-large trim size and special features including an embossed cover and four bonus spreads of never-before-seen materials, this handsome volume is a must-have for any Corduroy fan."},
    { id: "9", title: "Goodnight Moon", author: "Margaret Wise Brown" , price : "2.99$" , img:"/images/goodnight.png" , age:"0+" , release:2007 , pages:30 ,description:" In a great green room, tucked away in bed, is a little bunny. Goodnight room, goodnight moon. And to all the familiar things in the softly lit room—to the picture of the three little bears sitting on chairs, to the clocks and his socks, to the mittens and the kittens, to everything one by one—the little bunny says goodnight."},
    { id: "10", title: "The Tale of Peter Rabbit", author: "Beatrix Potter" , price : "12.50$"  , img:"/images/peterRabbit.png", age:"0+", release:2006,pages:72 ,description:"  Beatrix Potter is regarded as one of the world's best-loved children's authors of all time. From her first book, The Tale of Peter Rabbit, published by Frederick Warne in 1902, she went on to create a series of stories based around animal characters including Mrs. Tiggy-winkle, Benjamin Bunny, Jemima Puddle-duck, Mr. Jeremy Fisher and Tom Kitten."},
    { id: "11", title: "Madeline", author: "Ludwig Bemelmans" , price : "6.99$" , img:"/images/madeline.png", age:"0+" , release:1967, pages:57 ,description:" Nothing frightens Madeline—not tigers, not even mice. With its endearing, courageous heroine, cheerful humor, and wonderful, whimsical drawings of Paris, the Madeline stories are true classics that continue to charm readers, even after 75 years!"},
    { id: "12", title: "The Snowy Day", author: "  Ezra Jack Keats" , price : "8.99$" , img:"/images/snowyDay.png" , age:"0+" , release:2011, pages:48 ,description:" In 1962, a little boy named Peter put on his snowsuit and stepped out of his house and into the hearts of millions of readers. The Snowy Day transformed children's literature with its pioneering portrayal of an African-American child and the charming story and artwork that won it the Caldecott Medal. Fifty years later, Viking proudly celebrates Peter's adventure in this very special edition. Featuring eight pages of bonus material and a festive cover, this oversized edition of Keats's beloved book is a must-have."},
    { id: "13", title: "The Velveteen Rabbit", author: "Margery Williams" , price : "6.99$" , img:"/images/velveteenRabbit.png" , age:"0+", release:1999, pages:40,description:" There was once a velveteen rabbit, and in the beginning he was really splendid, this story begins. On Christmas morning, when he sat wedged in the top of the Boy's stocking, with a sprig of holly between his paws, the effect was charming. "},
    { id: "14", title: "Harold and the Purple Crayon ", author: "Crockett Johnson" , price : "6.99$" , img:"/images/purpleCrayon.png" , age:"0+", release:2015, pages:64,description:"  One evening Harold decides to go for a walk in the moonlight. Armed only with an oversize purple crayon, young Harold draws himself a landscape full of wonder and excitement. "},
    { id: "15", title: "A Picture for Harold's Room", author: "Crockett Johnson" , price : "5.99$" , img:"/images/HaroldRoom.png" , age:"0+", release:1985, pages:64,description:"Harold needs a picture for his bedroom wall, so he takes his purple crayon and begins to create a whole new world around him. But then he notices he has gotten very small—half the size of a daisy! Only a very clever artist could find his way home now."}
  ]
  app.get('/children', function(req, res) {
    const limit = req.query.limit; // получаем значение параметра limit из запроса//
    const pageNumber = req.query.page; // получаем значение параметра page из запроса//
    
    const children = childBooks.slice((pageNumber-1)*limit, pageNumber*limit)
    
    if (children) {
      res.json(children); 
    } else {
      res.status(404).send('Book not found'); 
    }
  });
  
    app.get('/childrenBooks/:id', (req, res) => {
      const bookId = req.params.id;  //вытягивает id //
      const book = childBooks.find( (item)=>  `${item.id}` === `${bookId}`)  //собирает все id из массива childrenBooks//
      if (book.id === bookId) {
        res.json(book); 
      } else {
        res.status(404).send('Book not found'); 
      }                  
    });
    const fantasyBooks = [
      { id: "1", title: "The Lord Of The Rings", author: "J.R.R. Tolkien" , price : "13.99$" , img:"/images/Rings.png" , age:"12+" , release:2012, pages:1216 ,description:" In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins."},
      { id: "2", title: "Harry Potter and the Philosopher's Stone", author: "Rowling J.K." , price : "13.99$" , img:"/images/HarryPotter.png" , age:"7+" , release:2014 , pages:342 ,description:"Please Read Notes: Brand New, International Softcover Edition, Printed in black and white pages, minor self wear on the cover or pages, Sale restriction may be printed on the book, but Book name, contents, and author are exactly same as Hardcover Edition. Fast delivery through DHL/FedEx express."},
      { id: "3", title: "Chronicles of Narnia Box Set", author: "C. S. Lewis" , price : "13.50$"  , img:"/images/chroniclesOfNarnia.png", age:"7+", release:2010,pages:1662 ,description:"C. S. Lewis's The Chronicles of Narnia has captivated readers of all ages for over sixty years, enchanting them with fantastical talking creatures, epic battles between good and evil, and magical doorways into new lands."},
      { id: "4", title: "A Game of Thrones", author: "George R.R. Martin " , price : "16.99$" , img:"/images/thronesGame.png", age:"7+" , release:1997, pages:831 ,description:"Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season."},
      { id: "5", title: "The Wheel of Time", author: "Robert Jordan " , price : "14.99$" , img:"/images/wheelTime.png" , age:"7+" , release:1993, pages:2272 ,description:"Since its debut in 1990, The Wheel of Time by Robert Jordan has captivated millions of readers around the globe with its scope, originality, and compelling characters."},
      { id: "6", title: "The Name of the Wind", author: "Patrick Rothfuss" , price : "13.99$" , img:"/images/windName.png", age:"7+" , release:2008, pages:722 ,description:"So begins a tale unequaled in fantasy literature—the story of a hero told in his own voice. It is a tale of sorrow, a tale of survival, a tale of one man’s search for meaning in his universe, and how that search, and the indomitable will that drove it, gave birth to a legend."},
      { id: "7", title: "The Dark Tower 8-Book Boxed Set ", author: "Stephen King " , price : "120.99$" , img:"/images/booksSet.png" , age:"7+", release:2016, pages:4720,description:"Set in a world of ominous landscape and macabre menace, The Dark Tower series features one of Stephen King’s most powerful creations—The Gunslinger—a haunting figure who embodies the qualities of the lone hero through the ages, from ancient myth to frontier Western legend. As Roland crosses a desert of damnation in a treacherous world that is a twisted image of our own, he moves ever closer to the Dark Tower of his dreams—and nightmares. "},
      { id: "8", title: "The Belgariad", author: "David Eddings " , price : "13.99$" , img:"/images/belgariad.png" , age:"7+" , release:2002, pages:656 ,description:"Millions of readers have discovered the magic of David Eddings’ New York Times bestselling series The Belgariad. Now the first three books in this monumental epic appear in a single volume. Here, long-time fans can rediscover the wonder—and the uninitiated can embark upon a thrilling new journey of fantasy and adventure."},
      { id: "9", title: "Mistborn Trilogy Boxed Set ", author: " Brandon Sanderson" , price : "18.99$" , img:"/images/mistbornTrilogy.png" , age:"7+" , release:2009 , pages:3000 ,description:" This boxed set includes the paperback editions of the complete Mistborn Trilogy--Mistborn, The Well of Ascension, and The Hero of Ages--by #1 New York Times bestselling author Brandon Sanderson. This wildly popular epic fantasy series is for ages 13 and up."},
      { id: "10", title: "Assassin's Apprentice ", author: "Robin Hobb" , price : "16.50$"  , img:"/images/apprentice.png", age:"7+", release:1996,pages:448 ,description:"Young Fitz is the bastard son of the noble Prince Chivalry, raised in the shadow of the royal court by his father’s gruff stableman. He is treated as an outcast by all the royalty except the devious King Shrewd, who has him secretly tutored in the arts of the assassin. For in Fitz’s blood runs the magic Skill—and the darker knowledge of a child raised with the stable hounds and rejected by his family."},
      { id: "11", title: "The Lies of Locke Lamora ", author: "Scott Lynch " , price : "16.99$" , img:"/images/liesOfLocke.png", age:"7+" , release:2007, pages:736 ,description:" “Remarkable . . . Scott Lynch’s first novel, The Lies of Locke Lamora, exports the suspense and wit of a cleverly constructed crime caper into an exotic realm of fantasy, and the result is engagingly entertaining.”—The Times (London)"},
      { id: "12", title: "The Black Prism", author: "Brent Weeks" , price : "18.99$" , img:"/images/blackPrism.png" , age:"7+" , release:2013, pages:688 ,description:"Guile is the Prism. He is high priest and emperor, a man whose power, wit, and charm are all that preserves a tenuous peace. Yet Prisms never last, and Guile knows exactly how long he has left to live."},
      { id: "13", title: "The Inheritance Trilogy", author: "N. K. Jemisin " , price : "16.99$" , img:"/images/theInheritance.png" , age:"7+", release:2014, pages:1472,description:" Yeine Darr is an outcast from the barbarian north. But when her mother dies under mysterious circumstances, she is summoned to the majestic city of Sky. There, to her shock, Yeine is named an heiress to the king. But the throne of the Hundred Thousand Kingdoms is not easily won, and Yeine is thrust into a vicious power struggle. "},
      { id: "14", title: "The Blade Itself ", author: "Joe Abercrombie " , price : "16.99$" , img:"/images/blade.png" , age:"7+", release:2015, pages:560,description:"The first novel in the First Law Trilogy and debut fantasy novel from New York Times bestseller, Joe Abercrombie. "},
      { id: "15", title: "The Name of the Wind: 10th Anniversary", author: " Patrick Rothfuss" , price : "15.99$" , img:"/images/nameWind10.png" , age:"7+", release:2017, pages:752,description:"This deluxe, illustrated edition celebrates the New York Times-bestselling series, The Kingkiller Chronicle—a masterful epic fantasy saga that has inspired readers worldwide."},
      { id: "16", title: "The Great Book of Amber ", author: "Roger Zelazny " , price : "16.99$" , img:"/images/amberBook.png" , age:"7+", release:2010, pages:1264,description:" One of the most revered names in sf and fantasy, the incomparable Roger Zelazny was honored with numerous prizes—including six Hugo and three Nebula Awards—over the course of his legendary career. Among his more than fifty books, arguably Zelazny’s most popular literary creations were his extraordinary Amber novels.  "},
      
    ]
    app.get('/fantasy', function(req, res) {
      const limit = req.query.limit; // получаем значение параметра limit из запроса//
      const pageNumber = req.query.page; // получаем значение параметра page из запроса//
      
      const fantasy = fantasyBooks.slice((pageNumber-1)*limit, pageNumber*limit)
      
      if (fantasy) {
        res.json(fantasy); 
      } else {
        res.status(404).send('Book not found'); 
      }
    });
    
      app.get('/fantasyBooks/:id', (req, res) => {
        const bookId = req.params.id;  //вытягивает id //
        const book = fantasyBooks.find( (item)=>  `${item.id}` === `${bookId}`)  //собирает все id из массива fantasyBooks//
        if (book.id === bookId) {
          res.json(book); 
        } else {
          res.status(404).send('Book not found'); 
        }                  
      });
  
      const historyBooks = [
        { id: "1", title: "The founders' speech to a nation in crisis", author: "Steven Rabb " , price : "16.99$" , img:"/images/foundersSpeech.png" , age:"12+" , release:2020, pages:159 ,description:" With more than 2,000 five-star reviews, readers are raving over this powerful speech to America crafted from the words of the Founding Fathers.The passion of the reviewers jumps off the page (“This book nearly made me stand up and cheer!” - “Absolutely BEAUTIFUL” - “I was in tears, just in the prologue!”) and captures the heart-felt response to this one-of-a-kind tapestry of the Founders’ words. Described as the American narrative, this compelling work is not only the #1 National Bestseller on America's Founding, it is also the much-needed rebuttal to all who would tear down the Founding Fathers of our nation. "},
        { id: "2", title: "The Federalist Papers ", author: "Alexander Hamilton" , price : "17.99$" , img:"/images/federalist.png" , age:"12+" , release:2014 , pages:448 ,description:"The Federalist Papers were composed of essays written by three of the Constitution's framers and ratifiers: Alexander Hamilton, the first Secretary of the Treasury; John Jay, the first Chief Justice of the United States; and James Madison, father of the Constitution, author of the Bill of Rights, and fourth President of the United States. The series was published anonymously under the pen name 'Publius,' in New York newspapers during the years 1787 and 1788 to persuade undecided New York state voters to ratify the new Constitution of the United States."},
        { id: "3", title: "The Pioneers", author: "David McCullough" , price : "15.50$"  , img:"/images/pioneers.png", age:"12+", release:2020,pages:353 ,description:"The #1 New York Times bestseller by Pulitzer Prize–winning historian David McCullough rediscovers an important chapter in the American story that’s “as resonant today as ever” (The Wall Street Journal)—the settling of the Northwest Territory by courageous pioneers who overcame incredible hardships to build a community based on ideals that would define our country."},
        { id: "4", title: "Myth America", author: "Kevin M. Kruse" , price : "11.99$" , img:"/images/myth.png", age:"12+" , release:2023, pages:400 ,description:" In Myth America, Kevin M. Kruse and Julian E. Zelizer have assembled an all-star team of fellow historians to push back against this misinformation. The contributors debunk narratives that portray the New Deal and Great Society as failures, immigrants as hostile invaders, and feminists as anti-family warriors—among numerous other partisan lies. Based on a firm foundation of historical scholarship, their findings revitalize our understanding of American history. "},
        { id: "5", title: "Washington's Immortals", author: " Patrick K. O'Donnell" , price : "20.99$" , img:"/images/immortals.png" , age:"12+" , release:2017, pages:480 ,description:" In Washington’s Immortals, bestselling military historian Patrick K. O’Donnell brings to life the forgotten story of these remarkable men. Known as “gentlemen of honour, family, and fortune,” they fought not only in Brooklyn, but also in key battles throughout the war including Trenton, Stony Point, Camden, Cowpens, Guilford Courthouse, and Yorktown, where their valor and resilience changed the course of history."},
        { id: "6", title: "Washington: A Life", author: "Ron Chernow" , price : "16.99$" , img:"/images/life.png", age:"12+" , release:2011, pages:928 ,description:" Celebrated biographer Ron Chernow provides a richly nuanced portrait of the father of our nation and the first president of the United States. With a breadth and depth matched by no other one volume biography of George Washington, this crisply paced narrative carries the reader through his adventurous early years, his heroic exploits with the Continental Army during the Revolutionary War, his presiding over the Constitutional Convention, and his magnificent performance as America's first president. In this groundbreaking work, based on massive research, Chernow shatters forever the stereotype of George Washington as a stolid, unemotional figure and brings to vivid life a dashing, passionate man of fiery opinions and many moods."},
        { id: "7", title: "The American Revolution", author: " DK" , price : "17.99$" , img:"/images/revolution.png" , age:"12+", release:2016, pages:400,description:" Uncover the remarkable story of the American Revolution! Who were the Redcoats, and what was the Boston Tea Party? Explore key events like the British surrender at Yorktown, and the writing of the Declaration of Independence."},
        { id: "8", title: "To Rescue the Constitution", author: " Bret Baier " , price : "18.99$" , img:"/images/rescue.png" , age:"12+" , release:2023, pages:800 ,description:" From the #1 New York Times bestselling author and Fox News Channel’s Chief Political Correspondent, a blockbuster new biography of George Washington, centering on his return from retirement to lead the Constitutional Convention and secure the future of the United States."},
        { id: "9", title: "Washington’s Marines ", author: "Major Genera Jason Q. Bohm USMC" , price : "17.99$" , img:"/images/marines.png" , age:"12+" , release:2023 , pages:700 ,description:"The fighting prowess of United States Marines is second to none, but few know of the Corps' humble beginnings and what it achieved during the early years of the American Revolution. That oversight is fully rectified by Jason Bohm's eye-opening Washington's Marines: The Origins of the Corps and the American Revolution, 1775-1777."},
        { id: "10", title: "And There Was Light", author: "Jon Meacham" , price : "17.50$"  , img:"/images/struggle.png", age:"12+", release:2020,pages:1268 ,description:" NEW YORK TIMES BESTSELLER • Pulitzer Prize–winning biographer Jon Meacham chronicles the life of Abraham Lincoln, charting how—and why—he confronted secession, threats to democracy, and the tragedy of slavery to expand the possibilities of America."},
        { id: "11", title: "Grant ", author: "Ron Chernow " , price : "19.99$" , img:"/images/grant.png", age:"12+" , release:2021, pages:1096 ,description:" Pulitzer Prize winner Ron Chernow returns with a sweeping and dramatic portrait of one of our most compelling generals and presidents, Ulysses S. Grant."},
        { id: "12", title: "Lincoln's God", author: "Joshua Zeitz " , price : "20.99$" , img:"/images/god.png" , age:"12+" , release:2023, pages:336 ,description:" Lincoln’s spiritual journey from spiritual skeptic to America's first evangelical Christian presidentbeliever—a conversion that changed both the Civil War and the practice of religion itself."},
        { id: "13", title: "History of France", author: "Billy Wellman " , price : "13.99$" , img:"/images/historyFr.png" , age:"12+", release:2020, pages:102,description:" France is a land absolutely steeped in history. It has always been a leading nation of Western Europe, and in many ways, one could say France is Western Europe. "},
        { id: "14", title: "Napoleon: A Life ", author: "Andrew Roberts" , price : "23.99$" , img:"/images/napoleon.png" , age:"12+", release:2015, pages:976,description:"The definitive biography of the great soldier-statesman by the acclaimed author of Churchill and The Last King of America—winner of the LA Times Book prize, finalist for the Plutarch prize, winner of the Fondation Napoleon prize and a New York Times bestseller "},
        { id: "15", title: "Napoleon: A Concise Biography ", author: "David A. Bell " , price : "19.99$" , img:"/images/napBiography.png" , age:"12+", release:2015, pages:152,description:" This book provides a concise, accurate, and lively portrait of Napoleon Bonaparte's character and career, situating him firmly in historical context."}
      ]
      app.get('/history', function(req, res) {
        const limit = req.query.limit; // получаем значение параметра limit из запроса//
        const pageNumber = req.query.page; // получаем значение параметра page из запроса//
        
        const history = historyBooks.slice((pageNumber-1)*limit, pageNumber*limit)
        
        if (history) {
          res.json(history); 
        } else {
          res.status(404).send('Book not found'); 
        }
      });
      
        app.get('/historyBooks/:id', (req, res) => {
          const bookId = req.params.id;  //вытягивает id //
          const book = historyBooks.find( (item)=>  `${item.id}` === `${bookId}`)  //собирает все id из массива historyBooks//
          if (book.id === bookId) {
            res.json(book); 
          } else {
            res.status(404).send('Book not found'); 
          }                  
        });


        const musicBooks = [
          { id: "1", title: "How Music Works", author: "David Byrne" , price : "9.99$" , img:"/images/music1.png" , age:"12+" , release:2012, pages:352 ,description:" How Music Works is David Byrne’s remarkable and buoyant celebration of a subject he has spent a lifetime thinking about. In it he explores how profoundly music is shaped by its time and place, and he explains how the advent of recording technology in the twentieth century forever changed our relationship to playing, performing, and listening to music. Acting as historian and anthropologist, raconteur and social scientist, he searches for patterns—and shows how those patterns have affected his own work over the years with Talking Heads and his many collaborators, from Brian Eno to Caetano Veloso. Byrne sees music as part of a larger, almost Darwinian pattern of adaptations and responses to its cultural and physical context. "},
          { id: "2", title: "This Is Your Brain on Music ", author: "Daniel J. Levitin " , price : "12.99$" , img:"/images/music2.png" , age:"12+" , release:2007 , pages:322 ,description:"In this groundbreaking union of art and science, rocker-turned-neuroscientist Daniel J. Levitin explores the connection between music—its performance, its composition, how we listen to it, why we enjoy it—and the human brain."},
          { id: "3", title: "The History of Jazz", author: "Ted Gioia" , price : "12.50$"  , img:"/images/music3.png", age:"12+", release:2011,pages:444 ,description:"  Ted Gioia's History of Jazz has been universally hailed as a classic--acclaimed by jazz critics and fans around the world. Now Gioia brings his magnificent work completely up-to-date, drawing on the latest research and revisiting virtually every aspect of the music, past and present."},
          { id: "4", title: "The New Grove Dictionary of Music ", author: "Stanley Sadie" , price : "10.99$" , img:"/images/music4.png", age:"12+" , release:2001, pages:5100 , description:"  Since its initial publication in 1980, the Dictionary has been widely acclaimed as an indispensable resource and a classic reference. The word updated doesn't begin to describe the thousands of new articles, topics, cross-references, and areas of scholarship incorporated into The New Grove"},
          { id: "5", title: "The Oxford Companion to Music", author: " Alison Latham" , price : "26.99$" , img:"/images/music5.png" , age:"12+" , release:2002, pages:1450 ,description:" First published in 1938, The Oxford Companion to Music has been the first choice for authoritative information on all aspects of music. Now, 17 years since the last edition, the Companion is here to serve a new generation of students, teachers, performers, concert goers, record collectors, and music lovers."},
          { id: "6", title: "Classical Form", author: "William E. Caplin " , price : "46.99$" , img:"/images/music6.png", age:"12+" , release:2000, pages:320 ,description:" Building on ideas first advanced by Arnold Schoenberg and later developed by Erwin Ratz, this book introduces a new theory of form for instrumental music in the classical style. The theory provides a broad set of principles and a comprehensive methodology for the analysis of classical form, from individual ideas, phrases, and themes to the large-scale organization of complete movements. It emphasizes the notion of formal function, that is, the specific role a given formal unit plays in the structural organization of a classical work."},
          { id: "7", title: "Musicophilia", author: " Oliver Sacks" , price : "18.99$" , img:"/images/music7.png" , age:"12+", release:2008, pages:425,description:" With the same trademark compassion and erudition he brought to The Man Who Mistook His Wife for a Hat, Oliver Sacks explores the place music occupies in the brain and how it affects the human condition. In Musicophilia, he shows us a variety of what he calls “musical misalignments.” "},
          { id: "8", title: "The Rest Is Noise", author: "Alex Ross" , price : "14.99$" , img:"/images/music8.png" , age:"12+" , release:2008, pages:720 ,description:" In this sweeping and dramatic narrative, Alex Ross, music critic for The New Yorker, weaves together the histories of the twentieth century and its music, from Vienna before the First World War to Paris in the twenties; from Hitler's Germany and Stalin's Russia to downtown New York in the sixties and seventies up to the present. Taking readers into the labyrinth of modern style, Ross draws revelatory connections between the century's most influential composers and the wider culture. The Rest Is Noise is an astonishing history of the twentieth century as told through its music."},
          { id: "9", title: "The Jazz Standards ", author: "Ted Gioia " , price : "17.99$" , img:"/images/music9.png" , age:"12+" , release:2012 , pages:544 ,description:" The Jazz Standards, a comprehensive guide to the most important jazz compositions, is a unique resource, a browser's companion, and an invaluable introduction to the art form. This essential book for music lovers tells the story of more than 250 key jazz songs, and includes a listening guide to more than 2,000 recordings."},
          { id: "10", title: "Miles: The Autobiography", author: "Miles Davis " , price : "17.50$"  , img:"/images/music10.png", age:"12+", release:1990,pages:448 ,description:" For more than forty years Miles Davis has been in the front rank of American music. Universally acclaimed as a musical genius, Miles is one of the most important and influential musicians in the world. The subject of several biographies, now Miles speaks out himself about his extraordinary life. Miles: The Autobiography, like Miles himself, holds nothing back."},
          { id: "11", title: "The Music Lesson ", author: "Victor L. Wooten" , price : "16.99$" , img:"/images/music11.png", age:"12+" , release:2008, pages:288 ,description:" The Music Lesson is the story of a struggling young musician who wanted music to be his life, and who wanted his life to be great. Then, from nowhere it seemed, a teacher arrived. Part musical genius, part philosopher, part eccentric wise man, the teacher would guide the young musician on a spiritual journey, and teach him that the gifts we get from music mirror those from life, and every movement, phrase, and chord has its own meaning...All you have to do is find the song inside."},
          
        ]
        app.get('/music', function(req, res) {
          const limit = req.query.limit; // получаем значение параметра limit из запроса//
          const pageNumber = req.query.page; // получаем значение параметра page из запроса//
          
          const music = musicBooks.slice((pageNumber-1)*limit, pageNumber*limit)
          
          if (music) {
            res.json(music); 
          } else {
            res.status(404).send('Book not found'); 
          }
        });
        app.get('/musicBooks/:id', (req, res) => {
          const bookId = req.params.id;  //вытягивает id //
          const book = musicBooks.find( (item)=>  `${item.id}` === `${bookId}`)  //собирает все id из массива musicBooks//
          if (book.id === bookId) {
            res.json(book); 
          } else {
            res.status(404).send('Book not found'); 
          }                  
        })

        const romanceBooks = [
          { id: "1", title: "Pride and Prejudice", author: "Jane Austen" , price : "4.99$" , img:"/images/romance1.png" , age:"18+" , release:1995, pages:272 ,description:" Set in a small English village during 1812, this classic novel is one of the greatest love stories ever told! A poor country squire is trying to find husbands for his five daughters.  When one of them, Elizabeth, meets rich Mr. Darcy at a dance, they don't find much in common.  But during the next few months, they overcome their differences and fall in love."},
          { id: "2", title: "Outlander  ", author: "Diana Gabaldon" , price : "7.99$" , img:"/images/romance2.png" , age:"16+" , release:1992 , pages:850 ,description:" Unrivaled storytelling. Unforgettable characters. Rich historical detail. These are the hallmarks of Diana Gabaldon’s work. Her New York Times bestselling Outlander novels have earned the praise of critics and captured the hearts of millions of fans. Here is the story that started it all, introducing two remarkable characters, Claire Beauchamp Randall and Jamie Fraser, in a spellbinding novel of passion and history that combines exhilarating adventure with a love story for the ages."},
          { id: "3", title: "Me Before You", author: " Jojo Moyes " , price : "5.50$"  , img:"/images/romance3.png", age:"16+", release:2013,pages:369 ,description:" Louisa Clark is an ordinary girl living an exceedingly ordinary life—steady boyfriend, close family—who has barely been farther afield than their tiny village. She takes a badly needed job working for ex–Master of the Universe Will Traynor, who is wheelchair bound after an accident. Will has always lived a huge life—big deals, extreme sports, worldwide travel—and now he’s pretty sure he cannot live the way he is."},
          { id: "4", title: "The Fault in Our Stars", author: " John Green " , price : "2.99$" , img:"/images/romance4.png", age:"12+" , release:2014, pages:352 ,description:" Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel’s story is about to be completely rewritten."},
          { id: "5", title: "Gone with the Wind ", author: "Margaret Mitchell" , price : "5.99$" , img:"/images/romance5.png" , age:"12+" , release:2011, pages:960 ,description:" This is the tale of Scarlett O’Hara, the spoiled, manipulative daughter of a wealthy plantation owner, who arrives at young womanhood just in time to see the Civil War forever change her way of life. A sweeping story of tangled passion and courage, in the pages of Gone With the Wind, Margaret Mitchell brings to life the unforgettable characters that have captivated readers for decades."},
          { id: "6", title: "The Time Traveler's Wife", author: "Audrey Niffenegger" , price : "16.99$" , img:"/images/romance6.png", age:"16+" , release:2004, pages:546 ,description:" A dazzling novel in the most untraditional fashion, this is the remarkable story of Henry DeTamble, a dashing, adventuresome librarian who travels involuntarily through time, and Clare Abshire, an artist whose life takes a natural sequential course. Henry and Clare's passionate love affair endures across a sea of time and captures the two lovers in an impossibly romantic trap, and it is Audrey Niffenegger's cinematic storytelling that makes the novel's unconventional chronology so vibrantly triumphant."},
          { id: "7", title: "A Walk to Remember", author: "Nicholas Sparks " , price : "8.99$" , img:"/images/romance7.png" , age:"12+", release:2004, pages:224,description:"  There was a time when the world was sweeter....when the women in Beaufort, North Carolina, wore dresses, and the men donned hats.... Every April, when the wind smells of both the sea and lilacs, Landon Carter remembers 1958, his last year at Beaufort High. Landon had dated a girl or two, and even once sworn that he'd been in love."},
          { id: "8", title: "The Bridges of Madison County", author: "Robert James Waller " , price : "10.99$" , img:"/images/romance8.png" , age:"16+" , release:1995, pages:224 ,description:" If you've ever experienced the one true love of your life, a love that for some reason could never be, you will understand why readers all over the world are so moved by this small, unknown first novel that they became a publishing phenomenon and #1 bestseller."},
          { id: "9", title: "The Time Keeper ", author: "Mitch Albom" , price : "7.99$" , img:"/images/romance9.png" , age:"18+" , release:2013 , pages:240 ,description:" In Mitch Albom's exceptional work of fiction, the inventor of the world's first clock is punished for trying to measure God's greatest gift. He is banished to a cave for centuries and forced to listen to the voices of all who come after him seeking more days, more years."},
          { id: "10", title: "The Best of Me ", author: "Nicholas Sparks" , price : "17.50$"  , img:"/images/romance10.png", age:"12+", release:2011,pages:304 ,description:" In the spring of 1984, high school students Amanda Collier and Dawson Cole fell deeply, irrevocably in love. Though they were from opposite sides of the tracks, their love for one another seemed to defy the realities of life in their small town in North Carolina. But as the summer of their senior year came to a close, unforeseen events would tear the young couple apart, setting them on radically divergent paths."},
          { id: "11", title: "The Lucky One  ", author: "Nicholas Sparks " , price : "11.99$" , img:"/images/romance11.png", age:"16+" , release:2008, pages:336 ,description:" Is there really such thing as a lucky charm? The hero of Nicholas Sparks's new novel believes he's found one in the form of a photograph of a smiling woman he's never met, but who he comes to believe holds the key to his destiny. The chain of events that leads to him possessing the photograph and finding the woman pictured in it is the stuff of love stories only a master such as Sparks can write."},
          { id: "12", title: "The Last Song ", author: " Nicholas Sparks " , price : "6.99$" , img:"/images/romance12.png" , age:"12+" , release:2010, pages:480 ,description:"  Seventeen year old Veronica 'Ronnie' Miller's life was turned upside-down when her parents divorced and her father moved from New York City to Wilmington, North Carolina. Three years later, she remains angry and alienated from her parents, especially her father...until her mother decides it would be in everyone's best interest if she spent the summer in Wilmington with him."},
          { id: "13", title: "Dear John", author: "Nicholas Sparks" , price : "9.99$" , img:"/images/romance13.png" , age:"12+", release:2009, pages:352,description:"An angry rebel, John dropped out of school and enlisted in the Army, not knowing what else to do with his life--until he meets the girl of his dreams, Savannah. Their mutual attraction quickly grows into the kind of love that leaves Savannah waiting for John to finish his tour of duty, and John wanting to settle down with the woman who captured his heart."}
        ]

        app.get('/romance', function(req, res) {
          const limit = req.query.limit; // получаем значение параметра limit из запроса//
          const pageNumber = req.query.page; // получаем значение параметра page из запроса//
          
          const romance = romanceBooks.slice((pageNumber-1)*limit, pageNumber*limit)
          
          if (romance) {
            res.json(romance); 
          } else {
            res.status(404).send('Book not found'); 
          }
        });

        app.get('/romanceBooks/:id', (req, res) => {
          const bookId = req.params.id;  //вытягивает id //
          const book = romanceBooks.find( (item)=>  `${item.id}` === `${bookId}`)  //собирает все id из массива romanceBooks//
          if (book.id === bookId) {
            res.json(book); 
          } else {
            res.status(404).send('Book not found'); 
          }                  
        })

    
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

 

