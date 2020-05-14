import React from 'react'
import './css/Task.css'

const Task=props=><div className='Task' key={Date.now()}>{props.children}</div>
            


export default Task