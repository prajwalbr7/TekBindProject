import { useState,useEffect } from 'react'
import axios from 'axios'
import './index.css'
import Header from '../header'
import Footer from '../footer'
import ProductList from '../porductListItems'
import CircularProgress from '@mui/material/CircularProgress';

const Products=()=>{
     const [data,setData]=useState({storedData:[],errorMessage:null})
    
        useEffect(() => {
            
            const FetchApi = async () => {
              try {
                const response = await axios.get("https://dummyjson.com/products");
                const dataInformation = response.data.products;
                console.log(dataInformation)
                if (response.status === 200) {
                  setData((prev) => ({
                    ...prev,
                    storedData: dataInformation
                  }));
                } else {
                  setData((prev) => ({
                    ...prev,
                    errorMessage: "Request failed with status " + response.status
                  }));
                }
              } catch (error) {
                setData((prev) => ({
                  ...prev,
                  errorMessage: error.message
                }));
              }
            };
        
            FetchApi();
          }, []);
        
        let {storedData,errorMessage}=data
    console.log(storedData)
    return(
        <div>
            <Header/>
            {storedData.length > 0 ? (<ul className='products-container'>{storedData.map((item) => (
                <ProductList productData={item} />
            ))}
            </ul>)
        :(errorMessage?(<p className='LoadingStyle'>{errorMessage}</p>):(<p className='LoadingStyle'><CircularProgress/></p>))}
        
            <Footer/>
        </div>
    )
}
export default Products