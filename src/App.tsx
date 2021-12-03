import './App.css'
import { Container } from "@chakra-ui/react"
import Header from "./components/Header"
import RouterView from './router'
import { Link } from "react-router-dom"
function App() {
  return (
    <>
      <Header/>
      <Container px={0}>
        123
        <Link to="/">1</Link>
        <div>
          <Link to="/card/123">123</Link>
          <Link to="/card/124">1234</Link>
        </div>
        <Link to="/about">about</Link>
        <RouterView />
      </Container>
    </>
  )
}

export default App