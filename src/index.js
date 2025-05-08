import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppJSX from './AppJSX';
import AppProfile from './AppProfile';
import AppCounter from './AppCounter';
import AppProducts from './AppProducts';
import AppClass from './AppClass';
import MainProducts from './components/MainProducts';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     {/* <AppJSX /> */}
//     {/* <AppProfile /> */}
//     {/* <AppCounter /> */}
//     {/* <AppProducts /> */}
//     {/* <AppClass /> */}
//   </React.StrictMode>
// );

// react-query 사용
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <MainProducts />
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
