const React = require('react')
class Show extends React.Component {
       render() {
              return (
                     <div className='box2'>
                            <link rel="stylesheet" href="/css/app.css" />
                            <h1><i>Cake Show Page</i></h1>
                            <h2> {this.props.product.name}</h2>
                            <img style={{ height: '450px', width: '550px' }} src={this.props.product.img} />
                            <h3>Description: {this.props.product.description}</h3>
                            <h3>Price: ${this.props.product.price}</h3>
                            {/* //<h3>{this.props.product.qty} Remaining</h3> */}
                            <h3 >{this.props.product.qty > 0 ? `${this.props.product.qty} in stock` : `Out of Stock`}</h3>
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
                            <br></br>
                            <a href={`/products/`}>Back </a>
                     </div>
              )

       }
}
module.exports = Show;