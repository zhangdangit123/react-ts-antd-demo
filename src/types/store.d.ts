//全局变量 不要直接import...from...
//而是使用 import('@/'*)这种语法
//TS 中提供了ReturnType 用来获取store 的数据类型的返回值
type RootState = ReturnType<typeof import('@/store').getState>
interface Window{
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function
}