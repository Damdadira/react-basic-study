import { useState } from 'react';
import useProducts from '../hooks/use-products';
import { useQuery } from '@tanstack/react-query';

export default function Products(){
  const [checked, setChecked] = useState(false);

  // useQuery({키, 함수})
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", checked],
    queryFn: async () => {
      console.log("fetching...", checked);
      return fetch(`data/${checked ? "sale_" : ""}products.json`).then((res) => res.json()
      );
    },
    staleTime: 1000 & 60 * 5, //5분 간격으로 fetching
  });
  // const [loading, error, products] = useProducts({ salesOnly: checked });

  const handleChange = () => setChecked(prev => !prev);

  if(isLoading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return(
    <>
      <input id="checkbox" type="checkbox" checked={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only 🔥Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  )
}