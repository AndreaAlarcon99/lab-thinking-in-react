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
            <th>inStock</th>    
        </tr>
      </thead>
                <tbody>
                    {product.map(product => {
                        return (
                            
                    <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.inStock?"Yes":"No"}</td>

                    </tr>
                        )
                    })}
      </tbody>
    </table>
          
        </div>
    )
}

export default Products
