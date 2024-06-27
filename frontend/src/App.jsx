import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import ProductScreeen from './screens/ProductScreeen';
import CartScreen from './screens/CartScreen';


function App() {

  return (
    <Router>
    <Header/>
      <main className='my-3'>

      <Container> 
      <Routes>
      <Route path='/' element={<HomeScreen/>} exact />
      <Route path='/product/:id' element={<ProductScreeen />} />
      <Route path='/product/:id?' element={<CartScreen />} />


      </Routes>
      </Container>

      </main>
    <Footer/>
    </Router>
  )
}

export default App
