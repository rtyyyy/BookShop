import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/footer";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import Header from "../header/header";
import './details.css'
import { useChosen } from "../hooks/useChosen";
import { useActions } from "../hooks/useActions";
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

function ChildBook(){
    const [book, setBook] = useState<IBook | null>(null)
    const { id  } = useParams(); // вытягиваем id из адресной строки//
    useEffect(()=>{
        if (id){           
            fetch(`http://localhost:3005/childrenBooks/${id}`)    // если id существует , делаем запрос на сервер и возвращаем нужный объект//
            .then(res =>  res.json())
            .then(book => setBook(book))
            .catch(error => console.log("ашыпка"));
        } 
        window.scroll(0 , 0)
    },[id] ) ;

    const {chosen} = useChosen()
    const {toggleFavorites} = useActions()  //нужен для того чтобы дёргать экшены//
    const isExists = chosen.some( (b: { id: any; }) => b.id === book?.id)
    return(
        <div>
<div className="book__wrapper--item">
            <Header/>
            <div className="book__content--item">
            <div className="book__image">
            <img src={book?.img} alt="" style={{width:400, height:600 }} />
      
            </div>
            <div style={{display:"flex"}}>
            <div className="book__info">
                <h1 className="book__title--item">{book?.title}</h1>
                
                <h3 className="book__author--item">{book?.author}</h3>
                <div className="book__info--list">
                <ul>
                    <li className="book__restriction">Age restriction</li>
                    <li className="book__release">Release date</li>
                    <li className="book__pages">Pages</li>
                    <li>Goods ID</li>
                </ul>
                <ul>
                    <li className="book__restriction">{book?.age}</li>
                    <li className="book__release">{book?.release}</li>
                    <li className="book__pages">{book?.pages}</li>
                    <li className="book__id">{id}</li>
                </ul>
                </div>
                
                
                
            </div>
            <div className="book__buttons">
                <p className="book__price--item"> {book?.price}</p>
                <div style={{display:'flex'}}>
                <button className="buy__button">Buy </button>
                <button onClick={() => toggleFavorites(book)} className="book__button--item" style={{marginRight:20 , borderRadius:10}}> { isExists ? <BsBookmarkHeartFill/> : <BsBookmarkHeart/> }</button>
                </div>
                <div className="book__delivery">
                    <ul>
                        <li>
                        <p>Delivery by courier, 3$  Tomorrow</p>
                        </li>
                        <li><p>To the chain stores, Free  Tomorrow</p></li>
                        <li><p>To the pick-up points, 2$ Tomorrow</p></li>
                    </ul>
                    
                </div>
                
            </div>
            </div>
            
        </div>
        <div className="book__desc--item">
        <p>{book?.description}</p>
        </div>
        <Footer/>
    </div>
        </div>
    )
}

export default ChildBook