import axios from 'axios'
import {useState,useEffect} from 'react'
import Mpesapayment from './Mpesapayment'
import { useNavigate } from 'react-router-dom'
const Getproducts  = () =>{

    let navigate = useNavigate()

    // declare the states for getting products 
    const[loading,setLoading] = useState ("")
    const[products,setProducts] = useState ([])
    const[error,setError] = useState ("")

    // function to get products
    const getproducts = async () =>{
        setLoading("Please wait...")
        try {
            const response = await axios.get("https://rufus.alwaysdata.net/api/getproducts")
            setProducts(response.data)
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }

// call the function 
 useEffect(()=>{
    getproducts()
 })
//  log to see if we have products 
console.log(products);

// image path 
const imagepath = "https://rufus.alwaysdata.net/static/images/"
    return(
        <div className='row'>
            <h1 className="text-secondary">Available Games</h1>
            {/* map the products */}
            {products.map(singleproduct=>(
                
            <div className='col-md-3 p-3 mb-5'>
                <div className='card shadow p-2'>
                    {/* image goes here  */}
                    <img src={imagepath + singleproduct.product_photo} alt="" height={400}/>
                    <div className='card-body'>
                        <h5 className='text-dark'>{singleproduct.product_name}</h5>
                        <p>{singleproduct.product_description.slice(0 , 30)}...</p>
                        <b className='text-danger'>Ksh{singleproduct.product_cost}</b><br />
                        <span className='badge bg-primary p-2'>{singleproduct.product_category}</span> <br /> <br /><br />
                        <button className='btn btn-outline-success w-100' onClick={()=> navigate("/mpesa" , {state:{singleproduct}})}>Purchase Now</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}
export default Getproducts