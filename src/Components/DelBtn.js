import React from 'react'
import { FaTrashAlt} from "react-icons/fa";
import './css/DelBtn.css'



const DelBtn=(props)=>{
   return <button> <FaTrashAlt onClick={props.handlerDel}/></button>

}


export default DelBtn