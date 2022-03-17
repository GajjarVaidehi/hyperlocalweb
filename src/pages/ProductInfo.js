import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import fireDB from "../fireConfig";
import { useParams } from "react-router-dom";

function ProductInfo() {
  const [product, setProducts] = useState([]);
  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const productTemp = await getDoc(
        doc(fireDB, "products", params.productid)
      );
      setProducts(productTemp.data());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <h1>Product Info</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {product && (
              <div>
                <p>
                  <b>{product.name}</b>
                </p>

                <img src={product.imageURL} className="product-info-img" />
                <hr />
                <p>product.description</p>
                <div className="d-flex justify-content-end my-3">
                  <button>ADD TO CART</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductInfo;
