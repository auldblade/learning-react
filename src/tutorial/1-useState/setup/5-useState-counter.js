import React, { useState } from 'react';




const UseStateCounter = () => {

  const [val, setVal] = useState(1)

  const reset = () => {
    setVal(0)
  }

  const complexIncrease = ()=>{
    setTimeout(()=>{
      setVal((prevState)=>{
        return prevState + 1;
      })
    }, 2000)
  }

  const complexDecrease = ()=>{
    setTimeout(()=>{
      setVal((prevState)=>{
        return prevState - 1;
      })
    }, 2000)
  }



  return (<>
    <section style={{margin: '4rem 0'}}>
      <h2>regular counter</h2>
      <h1>{val}</h1>
      <button className='btn' onClick={() => {setVal(val-1)}}>decrease</button>
      <button className='btn'onClick={reset}>reset</button>
      <button className='btn' onClick={() => {setVal(val+1)}}>increase</button>
    </section>
    <section style={{margin: '4rem 0'}}>
      <h2>more complex counter</h2>
      <h1>{val}</h1>
      <button className='btn' onClick={complexDecrease}>decrease</button>
      <button className='btn'onClick={reset}>reset</button>
      <button className='btn' onClick={complexIncrease}>increase later</button>
    </section>
  </>)
};

export default UseStateCounter;
