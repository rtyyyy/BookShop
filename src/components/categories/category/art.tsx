import { useEffect, useState } from "react";
import Header from "../../header/header"
import Input from "../../input/input"
import './styles.css'
import { Link } from "react-router-dom";
import Footer from "../../footer/footer";
interface IBook{
    id : string,
    title: string,
    author: string,
    price: string,
    img: string,
    age: string,
    pages: number,
    release: number,
    description: string
}
function Art() {
    const [books, setBooks] = useState<IBook[]>([]); //инфа о книгахъ//
    const [currentPage, setCurrentPage] = useState(1); //номер текущей страницы//
    const [fetching, setFetching] = useState(true); // значение true в том случае если мы подгружаем данные//
    const [filteredBooks, setFilteredBooks] = useState<IBook[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    
    useEffect(()=>{
        if(fetching){
            console.log('fetching')
            fetch(`http://localhost:3005/arts?limit=6&page=${currentPage}`)    
            .then(res => res.json())
            .then(book => {
                setBooks([ ...books , ...book]) // старые фотки + новые с запроса//
                setCurrentPage(prevState => prevState + 1)})
                .finally(() => setFetching(false))
            .catch(error => console.log("ашыпка"));
            
        }
    }, [fetching]) ; 
    
    
    useEffect(()=>{
        document.addEventListener('scroll' , scrolling)       //вешаем скролл //
        return function(){
            document.removeEventListener('scroll' , scrolling)      //удаляем скролл (необходимо)//
        }
    }, [])
    const scrolling = (e:any) =>{   
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 ){  //функция вызываемая при скролле (1 - общая высота страницы, 2 - текущее положение скролла от верха страницуы, 3 - высота видимой области страницы)  //
            setFetching(true)
        }
    }
    useEffect(() => {
        const filtered = books.filter((book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBooks(filtered);
      }, [books, searchQuery]);
    return (
        <div className="catalog__wrapper">
            <Header />
            <div className="search__wrapper">
                <div className="search__input">
                    <h2 className="search__title">You can seacrh a book in this category!</h2>
                    <div className="search__field">
                    <div>
                        <div className="group">
                        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                        <input 
                        placeholder="Search a book"
                        type="search"
                        className="input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    </div>
                        <button>Search</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className='category__title'>
            <p>Select from the chosen category</p>
        </div>
        <div  className="book__category--wrapper">
        {filteredBooks.map(book => (
            <div key={book.id} style={{width:300}}>
                <Link to={`http://localhost:3000/artBook/${book.id}`} >
            <div  className="book__category--item">

            <div className="book__category--img">
            <img src={book.img} alt="" style={{width:280, height:300 }}  />
            </div>
            <div className="book__category--description">
            <p className="book__category--title" style={{marginLeft:0 , width:200, height:30}}>{book.title}</p>
            <h5 className="book__categpry--author">{book.author}</h5>
            <p className="book__category--price" style={{ marginLeft:0}}>{book.price}$</p>
        </div>
        </div>
        </Link>
        </div>
        ))}
      </div>
      <Footer/>
        </div>
    )
}
export default Art