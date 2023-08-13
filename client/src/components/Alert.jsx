import React from 'react'

export default function Alert(props) {
  return (
    <div className='alert_body' style={props.type == "error"?{backgroundColor:"#f00"} : {backgroundColor:"#0f0"}}>
      <div className='alert_text'>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
