import React from 'react'
import Portal from './Portal'

export default function DisplayPortal(){

  const [isOne, setIsOn] = React.useState(false)

  

  return(
  <section className='container'>
    <button onClick={()=>setIsOn(prevValue => !prevValue)}>Toggle Portal</button>
    <Portal style="success" value={isOne}>
      <h1>Congratulations</h1>
      <p>This Component is being rendered outside its normal flow.</p>
    </Portal>
  </section>)
}