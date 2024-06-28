import { useRoutes, BrowserRouter } from "react-router-dom"
import Navbar from "../../Components/Navbar"
import Home from "../Home"
import Login from "../Login"
import Signin from "../Sign in"

//Aqui se van a definir las rutas en una variable
const AppRoutes = () => {
    //Creando las rutas de navegacion
    let routes = useRoutes([
      {path: '/', element: <Home />},
      {path: '/login', element: <Login />},
      {path: '/signin', element: <Signin />}
    ])
    
    return routes
}

//Aqui solo retornara cada una de las paginas definidas
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
