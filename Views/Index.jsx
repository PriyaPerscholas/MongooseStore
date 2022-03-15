const React = require('react')
class Index extends React.Component {
       render() {
              return (
                     <div>
                            <h1>Products Index Page</h1>
                            <ul>
                                   {this.props.products.map((product, i) => {
                                          return (
                                                 <li key={i}>
                                                        Name :{product.name}<br></br>
                                                        Description:{product.description}<br></br>
                                                        <a href={`/products/${product.id}`}><img src={product.img} /></a>
                                                        Price:{product.price}<br></br>
                                                        Quantity:{product.qty}
                                                 </li>
                                          )

                                   })}
                            </ul>
                            <nav>
                                   <a href="/products/new">Create a New Product</a>
                            </nav>
                     </div>
              )
       }
}
module.exports = Index
