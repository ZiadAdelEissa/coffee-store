import { useParams } from 'react-router-dom'
import { useEffect }from "react"
import React,{useState} from 'react'
import './details.css'  

export default function Details() {
 
  const apiUrl = "https://fakestoreapi.com/products";
  const [proudect,setproudect] = useState({});
  // to restore productId in params
  const params = useParams();
  useEffect(() => {
    fetch(`${apiUrl}/${params.proudectId}`)
      .then((res) => res.json())
      .then((proudect) => setproudect(proudect));
  }, []);
  return (
    <>
      <div className="product-details pt-5">
        <div className="container pt-5">
          <h1>Product Details</h1>
          <div className="row pt-5">
            <div className="content col-lg-6">
              <h2>{proudect.title}</h2>
              <p>
                <span>Description: </span>
                {proudect.description}
              </p>
              <p>
                <span>Category: </span>
                {proudect.category}
              </p>
              <p>
                <span>Price: </span>
                {proudect.price} EGP
              </p>
              <div>
                <button className="d-none d-md-block">Add To Cart</button>
              </div>
            </div>
            <div className="image col-lg-6">
              <img src={proudect.image} alt={proudect.title} />
            </div>
            <button className="d-block d-md-none">Add To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}