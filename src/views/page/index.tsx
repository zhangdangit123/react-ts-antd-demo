import { useSelector,useDispatch } from "react-redux";

const Page = ()=>{
    //获取 stort 内数据
    const {token} = useSelector(
        (state:RootState)=>({
            token:state.token,
            num:state.num
        })
    )
    const {num} = useSelector(
        (state:RootState)=>({
            num:state.num
        })
    )
    //修改 stort 数据
    const dispatch = useDispatch()
    const changeNum = ()=>{
        //dispatch({type:"字符串  是一个记号",val:3}) type是固定的 val是自定义
        dispatch({type:"addNum"})
    }
    return(
        <div>
            这是page页面
            <p>{token}</p>
            <p>{num}</p>
            <button onClick = {changeNum}></button>
        </div>
    )
}

export default Page