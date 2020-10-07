import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

function ProductScreen(props) {
    const [qty, setQty] = useState(0);
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [])

const handleAddToCart = () =>{
    props.history.push("/cart/"+props.match.params.id+"?qty="+qty)
}



    return <div className="productdetails">
        <div className="backtoresult">
            <Link to="/">Back to Result</Link>
        </div> 
        

  {
  loading? <div>Loading ......</div>:
  
  error? <div>{error}</div>:
  (

    <div className="details">
    <div className="details-image">
        <img src={product.image} alt={product.name}></img>
    </div>

    <div className="details-info">
        <ul>
            <li>
                <h4>{product.name}</h4>
            </li>
            <li>
                {product.rating} Stars {product.numReviews} Reviews
       </li>
            <li>
                <b><h2>{product.price}</h2></b>
            </li> 
            <li>
                <div>
                    <b>Description:</b><br></br>

                    {product.description}
                </div>
            </li>
        </ul>
    </div>
    <div className="details-action">
        <ul>
            <li>
                Price:<b> {product.price}</b>
            </li>
            <li>
                Status: {product.countInStock > 0 ? "In Stock": <div className="OutOfStock">Out of Stock</div>}
            </li>
            <li>
                Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                    {[...Array(product.countInStock).keys()].map(x=>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                        )}
                </select>
            </li>
            <li>
               
            {product.countInStock>0 &&
                <button onClick={handleAddToCart} className="button">Add to Cart</button>
}
            
                </li>
        </ul>
    </div>
</div>
  )}
    </div>
}
export default ProductScreen;
 