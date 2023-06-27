export default {
    state:{
        num:20
    },
    actions:{
        addNum(newState:{num:number},action:{type:any}){
            newState.num++
        },
    },
    addNum:'addNum',
}