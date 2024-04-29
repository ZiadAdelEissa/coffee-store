import { useParams } from 'react-router-dom'
import { useEffect }from "react"
import React,{useState} from 'react'
import './details.css'  

export default function Details() {
 
  const apiUrl = "https://fake-coffee-api.vercel.app/api";
  const [product,setProduct] = useState([]);
  // to restore productId in params
  const params = useParams();
  useEffect(() => {
    fetch(`${apiUrl}/${params.productId}`)
      .then((res) => res.json())
      .then((product) => setProduct(product[0]));
  }, []);
  return (
    <>
      <div className="product-details pt-5">
        <div className="container pt-5">
          <h1>Product Details</h1>
          <div className="row pt-5">
            <div className="content col-lg-6">
              <h2>{product.name}</h2>
              <p>
                <span>Description: </span>
                {product.description}
              </p>
              <p>
                <span>Region: </span>
                {product.region}
              </p>
              <p>
                <span>Price: </span>
                {product.price} EGP
              </p>
              <div>
                <button className="d-none d-md-block">Add To Cart</button>
              </div>
            </div>
            <div className="image col-lg-6">
              <img src={product.image_url} alt={product.title} />
            </div>
            <button className="d-block d-md-none">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}