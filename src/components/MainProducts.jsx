import { useState } from 'react'
import Products from './Products'

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);

  return (
    <main style={{display: 'flex', gap: '3rem'}}>
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts(show => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts(show => !show)}>
          Toggle
        </button>
      </div>
    </main>
  )
}