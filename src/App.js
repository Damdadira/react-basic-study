import './App.css';

function App() {
  const name = '먹을꺼';
  return (
    <>
      <h1 className='orange'>Hello!</h1>
      <h2>Hello@</h2>
      <p>{name}</p>
      <ul>
        <li>우유</li>
        <li>딸기</li>
        <li>바나나</li>
      </ul>
      <img style={{width: '260px', height: '300px'}} src='https://images.unsplash.com/photo-1744063893861-3e703c13d1e4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
    </>
  );
}

export default App;
