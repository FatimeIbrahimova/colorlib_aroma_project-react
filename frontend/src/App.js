
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { ROUTES } from './routes/Route';


const router=createBrowserRouter(ROUTES)

function App() {
  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
