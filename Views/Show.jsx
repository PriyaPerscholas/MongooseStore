const React = require('react')
class Show extends React.Component {
       render() {
              return (
                     <div>
                            <h1>Product Show Page</h1>
                            <img style={{ height: '250px', width: '250px' }} src={this.props.product.img} />
                            <h1>Product: {this.props.product.name}</h1>
                            <h3>Description: {this.props.product.description}</h3>
                            <h3>Price: ${this.props.product.price}</h3>
                            <h3>Product:{this.props.product.qty}</h3>
                            <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
                                   <input type="submit" value="BuyProduct" />
                            </form>
                            <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                                   <input type="submit" value="Delete" />
                            </form>
                            <br></br>
                            <a href={`/products/${this.props.product._id}/edit`}>EditProduct</a>
                            <br></br>
                            <a href={`/products/`}>Back to Index</a>
                     </div>
              )
       }
}
module.exports = Show;