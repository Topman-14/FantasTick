import React from 'react'

const Alert = (props) => {
  return ( 
  <div className='alert_body' style={props.type == "error"?{backgroundColor:"#f00"} : (props.type == "loading")? {backgroundColor:"#999"} : {backgroundColor:"#0f0"}}>
    <div className='alert_text'>
      <p>{props.text}</p>
    </div>
  </div> );
}

export default Alert;