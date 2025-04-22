import { useEffect, useState } from 'react';

export default function Products(){
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = () => setChecked(prev => !prev);

  // 네트워크 통신할때 처음으로 무언가 뿌릴일이 있을때 유용하게 사용(ex-api로 테이블에 등록되어있는 데이터 호출할때)
  useEffect(() => {
    setLoading(true);
    setError(undefined);
    
    fetch(`data/${checked ? 'sale_' : ''}products.json`)
    .then(res => res.json())
    .then(data => {
      console.log('데이터를 네크워크에서 받아옴');
      setProducts(data);
    })
    .catch(e => setError('에러가 발생했음!'))
    .finally(() => setLoading(false));
    return () => {
      console.log('깨끗하게 청소하는 일들을 합니다.')
    }
  }, [checked]); 
  // 딱 한번만 처리되어야 한다면 빈배열[]로 넘기기, 
  // but checked 상태에 따라 상태가 변해야 하기 때문에 checked를 넣어주기

  if(loading) return <p>Loading...</p>
  if(error) return <p>{error}</p>

  return(
    <>
      <input id="checkbox" type="checkbox" value={checked} onChange={handleChange} />
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