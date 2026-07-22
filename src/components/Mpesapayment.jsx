import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const Mpesapayment = () => {
    const {singleproduct} =useLocation().state || {}
    // image path goes here 
    const imagepath = "https://rufus.alwaysdata.net/static/images/"
    // declare the states here 
    const [phone,setPhone]= useState("")
    

    // states for posting data 
    const [loading,setLoading]=useState("")
    const [success,setSuccess]=useState("")
    const [error,setError]=useState("")
    

    // function to handle submit 
    const handlesubmit= async (e) =>{
        e.preventDefault()
        setLoading("Please wait ...")
        
        // envelop 
        const formdata = new FormData()
        formdata.append("phone",phone)
        formdata.append("amount",singleproduct.product_cost)

        try {
            const response = await axios.post("https://rufus.alwaysdata.net/api/mpesa_payment",formdata)
            setSuccess(response.data.message)
        } catch (error) {
            setLoading("")
            setError(error.message)

            
        }
    }



  return (
    <div className='row justify-content-center'>
        <div className="col-md-5 card shadow p-4 mt-3">
         
            {/* image goes hhere  */}
            <img src= {imagepath + singleproduct.product_photo} alt="" height={500}/> <br />
            <h5 className='text-primary'>{singleproduct.product_name}</h5>
            <p>{singleproduct.product_description.slice(0 , 30)}...</p>
            <b className="text-warning">Ksh{singleproduct.product_cost}</b> <br />
            <span className="badge bg-danger " ><h3>{singleproduct.product_category}</h3></span> <br />
            {/* bind states */}
            <h1>{phone}</h1>
            <h1 className='text-secondary'>{loading}</h1>
            <h1 className='text-success'>{success}</h1>
            <h1 className='text-danger'>{error}</h1>
            
            <form action="" onSubmit={handlesubmit}>
                <input type="tel" className='form-control' placeholder='Enter phone 254XXXXXXX' onChange={(e)=>setPhone(e.target.value)}/> <br />

                <button className='btn btn-secondary form-control'>Make Payment</button>
            </form>

        </div>
      
    </div>
  )
}

export default Mpesapayment
