import { useEffect, useState } from "react";
import Header from "../../header/header"
import Input from "../../input/input"
import './styles.css'
import { Link } from "react-router-dom";
import axios from "axios";
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
    return (
        <div className="catalog__wrapper">
            <Header />
            <div className="search__wrapper">
                <div className="search__input">
                    <h2 className="search__title">You can seacrh a book in this category!</h2>
                    <div className="search__field">
                        <Input />
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
        {books.map(book => (
            <div key={book.id} style={{width:300}}>
                <Link to={`http://localhost:3000/artBook/${book.id}`} >
            <div  className="book__category--item">

            <div className="book__category--img">
            <img src={book.img} alt="" style={{width:280, height:300 }}  />
            </div>
            <div className="book__category--description">
            <p className="book__category--title" style={{marginLeft:0 , width:200, height:30}}>{book.title}</p>
            <h5 className="book__categpry--author">{book.author}</h5>
            <p className="book__category--price" style={{ marginLeft:0}}>{book.price}</p>
        </div>
        </div>
        </Link>
        </div>
        ))}
      </div>
        </div>
    )
}
export default Art