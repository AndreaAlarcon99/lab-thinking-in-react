import { useState } from 'react';
import dataJson from "../data.json"

function Products() {
    
  const [product, setProduct] = useState(dataJson);

    return (
        <div >
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
            <th>Category</th>
        </tr>
      </thead>
                <tbody>
                    {product.map(product => {
                        return (
                            
                    <tr>
                        <td> {product.inStock ? <p>{product.name}</p> : <p style={{ "color": "red" }}>{product.name} </p>} </td>
                        <td> {product.inStock? <p>{product.price}</p>: <p style={{"color":"red"}}>{product.price} </p>} </td>
                        <td> {product.inStock? <p>{product.category}</p>: <p style={{"color":"red"}}>{product.category} </p>} </td>     
                    </tr>
                        )
                    })}
      </tbody>
    </table>
          
        </div>
    )
}

export default Products
