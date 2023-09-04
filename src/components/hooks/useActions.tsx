import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { actions } from "../../store/api/chosen"
const rootActions = {
    ...actions
} // rootActions мы делаем для того чтобы сохранить все экшены в одну переменную , в данном случае экшен только один//
export const useActions =()=>{
    const dispatch = useDispatch()  //нужен для того чтобы дёргать экшены//
    return useMemo(() =>  bindActionCreators(rootActions , dispatch), [dispatch] ) //useMemo добавили для кэширования , bindActionCreators позволяет обернуть все экшены в диспатч//
}