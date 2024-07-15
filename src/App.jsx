import { RouterProvider } from "react-router-dom"
import Routes from "./routes"
import { PrimeReactProvider } from 'primereact/api';
import { GlobalProvider } from "./contexts/global/globalContext";

const App = () => {

  return (
    <PrimeReactProvider>
      <GlobalProvider>
          <RouterProvider router={Routes} />
      </GlobalProvider>
    </PrimeReactProvider>
  )
}

export default App
