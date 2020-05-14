import React from 'react'
import { FaRegEdit } from "react-icons/fa";

const EditBtn=props=>
{
    return <button><FaRegEdit onClick={props.handlerEdit}/></button>
}


export default EditBtn