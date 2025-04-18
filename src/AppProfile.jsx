import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  
  return(
    <>
      <Profile 
        image='https://images.unsplash.com/photo-1732165783074-b0f7c123982b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D'
        name='James Kim' 
        title='프론트엔드 개발자'
      />
      <Profile 
        image='https://images.unsplash.com/photo-1742306492021-817ebf6a344a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NDd8fHxlbnwwfHx8fHw%3D'
        name='Anna Young' 
        title='백엔드 개발자'
      />
      <Profile 
        image='https://plus.unsplash.com/premium_photo-1742230896417-6a811c76ac36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNDR8fHxlbnwwfHx8fHw%3D'
        name='Bob Yu' 
        title='프론트엔드 개발자'
      />
    </>
  );
}

export default AppProfile;
