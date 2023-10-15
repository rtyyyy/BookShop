import { BsBookmarkHeartFill } from 'react-icons/bs'
import './header.css'
import { useSelector } from 'react-redux'
import { useChosen } from '../hooks/useChosen'

function ChosenIcon(){
    const {chosen} = useChosen()
    return(
        <div className='choisen__header'>
<BsBookmarkHeartFill style={{width:30, height:30, color:"white"}}/>
<span>{chosen.length}</span>
        </div>
    )
}

export default ChosenIcon