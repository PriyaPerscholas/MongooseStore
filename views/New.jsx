const React = require('react')

class New extends React.Component {
       render() {
              return (
                     <div className='box3'>
                            <link rel="stylesheet" href="/css/app.css" />
                            <h1><i>Create Product Page</i></h1>
                            <form action="/products" method="POST">
                                   Name:
                                   <br></br>
                                   <input type="text" name="name" required />
                                   <br></br>
                                   <br></br>
                                   Description:
                                   <br></br>
                                   <input type="text" name="description" />
                                   <br></br>
                                   <br></br>
                                   Image URL:
                                   <br></br>
                                   <input type="text" name="img" />
                                   <br></br>
                                   <br></br>
                                   Price:
                                   <br></br>
                                   <input type="number" name="price" step="0.01" min="0" /><br></br>
                                   <br></br>
                                   Quantity:
                                   <br></br>
                                   <input type="number" name="qty" min="0" step="1" /><br></br>
                                   <br></br>
                                   <input type="submit" name="" value="Create New Cake" /><br></br>
                                   <br></br>
                            </form>
                     </div>
              )
       }
}
module.exports = New