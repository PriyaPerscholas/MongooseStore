const React = require('react')
class Show extends React.Component {
       render() {
              return (
                     <div>
                            <h1>{this.props.product.name}</h1>
                            <h3>{this.props.product.description}</h3>
                            <img src={this.props.product.img} /><br />
                            <h3>{this.props.product.price}</h3>
                            <h3>{this.props.product.qty}</h3>
                            <a href={`/products/${product._id}/edit`}>Edit this product</a>

                            <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                   <input type="submit" value="DELETE" />
                            </form>
                            <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a>
                     </div>
              )
       }
}
module.exports = Show;