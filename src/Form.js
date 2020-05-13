import React,{useState} from 'react'

const useInputValue=initialValue=>
{
    const [value,setValue]=useState(initialValue)
    return{value,
           onChange:e=>setValue(e.target.value), 
           resetValue:()=>setValue('')}
}



const Form=({onSubmit})=>
{
    const [resetValue,...text]=useInputValue('')
    
    return(
        <form onSubmit={e=>{e.preventDefault()
                            onSubmit(text.value)
                            resetValue()}}>
         <input placeholder='Enter new task here!' {...text} style={{margin: 20}}/> 
           
        </form>
    )
}

export default Form
