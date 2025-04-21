import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return(
    <div className='counter'>
      <span className='number'>{count}</span>
      
      {/* 하나씩 증가 */}
      <button className='button' onClick={() => setCount(count + 1)}>Add +</button>
      
      {/* 이전 상태 유지 */}
      {/* <button className='button' onClick={() => {
        setCount((prev) => prev + 1)
        setCount((prev) => prev + 1)
        }}>Add +
      </button> */}
    </div>
  )
}