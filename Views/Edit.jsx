const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./Layout/Default.jsx')

class Edit extends React.Component {
       render() {
              return (
                     <div>
                            <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
                                   Name: <input type="text" name="name" defaultValue={this.props.product.name} /><br />
                                   Description:<input type="text" name="description" defaultValue={this.props.product.description} /><br />

                                   Image URL:<input type="text" name="img" defaultValue={this.props.product.img} /><br />
                                   Price:<input type="number" name="price" step="0.01 " defaultValue={this.props.product.price} /><br />
                                   Quantity:<input type="number" name="quantity" defaultValue={this.props.product.qty} /><br></br>
                                   <input type="submit" value="Submit Changes" />
                            </form>
                     </div>
              )
       }
}
module.exports = Edit;