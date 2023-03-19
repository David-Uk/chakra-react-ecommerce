import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          {/* <Route /> */}
        </main>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
