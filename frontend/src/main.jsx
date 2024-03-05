import React from 'react';
import ReactDOM from 'react-dom/client'; // Keep this import if you specifically need ReactDOM from react-dom/client
import './assets/bootstrap.custom.css';
import App from './App.jsx';
import './assets/index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" index={true} element={<HomeScreen/>}/>
      <Route path="/product/:id" index={true} element={<ProductScreen/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
