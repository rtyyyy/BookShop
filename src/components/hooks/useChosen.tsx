import { useSelector } from "react-redux"

export const useChosen = () =>{
    const {chosen} : any = useSelector( state => state) //чтобы каждый раз не дёргать chosen через useSelector мы ввынесли это в отдельный хук//
    return {chosen}
}