const React = require('react')
class Show extends React.Component {
       render() {
              return (
                     <div>
                            <link rel="stylesheet" href="/css/app.css" />
                            <h1><i>Cake Show Page</i></h1>
                            <img style={{ height: '350px', width: '350px' }} src={this.props.product.img} />
                            <h2>Product: {this.props.product.name}</h2>
                            <h3>Description: {this.props.product.description}</h3>
                            <h3>Price: ${this.props.product.price}</h3>
                            <h3>Product:{this.props.product.qty}</h3>
                            <form action={`/products/${this.props.product._id}?_method=PATCH`} method="POST">
                                   <input type="submit" value="BuyCake" />
                            </form>
                            <br></br>
                            <form action={`/products/${this.props.product._id}?_method=DELETE`} method="POST">
                                   <input type="submit" value="Delete" />
                            </form>
                            <br></br>
                            <a href={`/products/${this.props.product._id}/edit`}>EditCake</a>
                            <br></br>
                            <a href={`/products/`}>Back </a>
                     </div>
              )
       }
}
module.exports = Show;