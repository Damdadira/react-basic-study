import { useState } from 'react';

export default function Counter({total, onClick}) {
  const [count, setCount] = useState(0);

  return(
    <div className='counter'>
      <p className='number'>
        {count}
        <span className='total'>/{total}</span>
      </p>
      
      {/* 하나씩 증가 */}
      <button className='button' onClick={() => {
        setCount(prev => prev + 1)
        onClick()
        }}>
      Add +</button>
    </div>
  )
}