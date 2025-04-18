import './App.css';

function App() {
  const name = '먹을꺼';
  const list = ['우유', '딸기', '바나나', '요거트'];

  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello@</h2>
      <p>{name}</p>
      <ul>
        {
          list.map((item) => (
            <li>{item}</li>
          ))
        }
      </ul>
      <img 
        style={{width: '260px', height: '300px'}} 
        src='https://images.unsplash.com/photo-1744063893861-3e703c13d1e4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='nature' 
      />
    </>
  );
}

export default App;
