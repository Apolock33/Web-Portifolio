import { RouterProvider } from "react-router-dom"
import Routes from "./routes"
import { PrimeReactProvider } from 'primereact/api';
import Header from "./components/header";
import { GlobalProvider } from "./contexts/global/globalContext";

const App = () => {

  return (
    <PrimeReactProvider>
      <GlobalProvider>
        <Header>
          <RouterProvider router={Routes} />
        </Header>
      </GlobalProvider>
    </PrimeReactProvider>
  )
}

export default App
