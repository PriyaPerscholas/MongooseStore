const React = require('react')
class Index extends React.Component {
       render() {
              return (
                     <body>
                            <h1>N&N Cake Shop</h1>
                            {this.props.products.map((product, i) => {
                                   return (
                                          <div key={i}>
                                                 <h3>Name :{product.name}</h3>
                                                 <h4>Description:{product.description}</h4>
                                                 <a href={`/products/${product.id}`}><img src={product.img} /></a>
                                                 <h5>Price:${product.price}</h5>
                                                 <h5>Quantity:{product.qty > 0 ? `${product.qty} in stock` : `Out of Stock`}</h5>

                                          </div>
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
