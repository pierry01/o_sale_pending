import React from 'react'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'
import Jumbotron from '../components/products/Jumbotron'
import ProductList from './ProductsContainer'

const App = () => (
  <div>
    <Header />
    <br/>
    <Jumbotron />
    <ProductList />
    <Footer />
  </div>
)

// const App = () => {
//     return (
//         <div>App Component</div>
//     )
// }

export default App