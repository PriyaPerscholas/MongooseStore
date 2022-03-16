const React = require('react');
class Edit extends React.Component {
       render() {
              return (
                     <div className="box1" >
                            <link rel="stylesheet" href="/css/app.css" />
                            <h1><i>Product Edit Page</i></h1>
                            <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
                                   Name: <input type="text" name="name" defaultValue={this.props.product.name} />
                                   <br />
                                   <br></br>
                                   Description:<input type="text" name="description" defaultValue={this.props.product.description} /><br />
                                   <br></br>
                                   Image URL:<input type="text" name="img" defaultValue={this.props.product.img} />
                                   <br />
                                   <br></br>
                                   Price:<input type="number" name="price" step="0.01 " defaultValue={this.props.product.price} /><br />
                                   <br></br>
                                   Quantity:<input type="number" name="qty" defaultValue={this.props.product.qty} /><br></br>
                                   <br></br>
                                   <input type="submit" value="Submit Changes" />
                                   <br></br>
                            </form>
                     </div>
              )
       }
}
module.exports = Edit;