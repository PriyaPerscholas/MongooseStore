const React = require('react')
class Index extends React.Component {
       render() {
              return (
                     <html>
                            <body>
                                   <link rel="stylesheet" href="/css/app.css" />
                                   <h1><i>NeNi Cake Shop</i></h1>
                                   <div id="box">
                                          {this.props.products.map((product, i) => {
                                                 return (
                                                        <div key={i} className="cake">
                                                               <h3>{product.name}</h3>
                                                               <a href={`/products/${product.id}`}><img style={{ height: '350px', width: '350px' }} src={product.img} /></a>
                                                               <h5>Price:${product.price}</h5>
                                                               <h5>Quantity:{product.qty > 0 ? `${product.qty} in stock` : `Out of Stock`}</h5>
                                                        </div>
                                                 )
                                          })}
                                          <nav>
                                                 <a href="/products/new">Create a New Product</a>
                                          </nav>
                                   </div>
                            </body>
                     </html>
              )
       }
}
module.exports = Index
