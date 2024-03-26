import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
// import ListedBooks from './Components/ListedBooks/ListedBooks'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header></Header>
      <Main></Main>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
