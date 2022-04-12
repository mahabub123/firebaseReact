import { useContext,useState,createContext } from 'react'

const counterContext = createContext()
export const useCounter = ()=>useContext(counterContext)

const CounterContextProvider =(props)=>{
    const[count,setCount] = useState(0
        
        
        
        
        
        
        
        
        
        )
    const value={count}
    return(
        <counterContext.Provider value={value}>
            { props.children }
        </counterContext.Provider>
    )
}

export default CounterContextProvider