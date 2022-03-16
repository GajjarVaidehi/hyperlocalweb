import React, { useEffect, useLayoutEffect, useState } from 'react';
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore"; 
import fireDB from '../fireConfig';
import { async } from '@firebase/util';
import { fireproducts } from '../hyperlocal-products';


function HomePage() {

  const [products , setProducts] = useState([])

  useEffect(()=> {
      getData()
  }, [])

  async function getData () {
    try {
      const users =  await getDocs(collection(fireDB, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        
        const obj={
          id:doc.id,
          ...doc.data(),
        };
        
        productsArray.push(obj)

      });
        setProducts(productsArray);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
        
      <div className="container">

      </div>

    </Layout>
  )
}

export default HomePage