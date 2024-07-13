import { RouterProvider } from "react-router-dom"
import Routes from "./routes"
import { PrimeReactProvider } from 'primereact/api';

const App = () => {

  return (
    <PrimeReactProvider>
      <RouterProvider router={Routes} />
    </PrimeReactProvider>
  )
}

export default App
