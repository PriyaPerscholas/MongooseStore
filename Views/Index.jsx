const React = require('react')
class Index extends React.Component {
       render() {
              return (
                     <body>
                            <h1>Products Index Page</h1>
                            {this.props.products.map((product, i) => {
                                   return (
                                          <li key={i}>
                                                 <h3>Name :{product.name}</h3>
                                                 <h3>Description:{product.description}</h3>
                                                 <a href={`/products/${product.id}`}><img src={product.img} /></a>
                                                 Price:${product.price}<br />
                                                 Quantity:{product.qty}
                                          </li>
                                   )
                            })}
                            <nav>
                                   <a href="/products/new">Create a New Product</a>
                            </nav>
                     </body>
              )
       }
}
module.exports = Index
