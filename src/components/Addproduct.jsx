import { useState } from "react"
import axios from 'axios'

const Addproduct= ()=> {
    // declare the states herre 
    const [productname,setProductName] =useState("")
    const [productcategory,setProductCategory] =useState("")
    const [productdescription,setProductDescription] =useState("")
    const [productcost,setProductCost] =useState("")
    const [productphoto,setProductPhoto] =useState("")

    // states for posting data 
    const [loading,setLoading] =useState("")
    const [success,setSuccess] =useState("")
    const [error,setError] =useState("")

    // function to handle submit 
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait ooo....")
        // empty envelop 
        const formdata = new FormData()
        formdata.append("product_name",productname)
        formdata.append("product_category",productcategory)
        formdata.append("product_description",productdescription)
        formdata.append("product_cost",productcost)
        formdata.append("product_photo",productphoto)
        try {
            const response = await axios.post("https://rufus.alwaysdata.net/api/addproduct",formdata)
            setSuccess(response.data.message)
            setLoading("")
            
        } catch (error) {
            setLoading("")
            setError("something went wrong")
        }
    }
    return(
        
        <div className="row justify-content-center mt-5 " > 

            <div className="col-md-6 card shadow p-3 ">
                <h1 className="text-warning">Upload Products</h1> 
                {/* binding the states */}
                <h1 className='text-secondary'>{loading}</h1>
                <h1 className='text-success'>{success}</h1>
                <h1 className='text-danger'>{error}</h1>
              
                
                <form action="" onSubmit={handlesubmit} >
                    <input type="text" placeholder="Enter Product name " className="form-control" required onChange={(e) => setProductName(e.target.value)} /> <br />
                    <input type="text" placeholder="Enter Product Category " className="form-control" required  onChange={(e) => setProductCategory(e.target.value)}/> <br />
                    <textarea name="" id="" className="form-control" placeholder="Describe your product" required onChange={(e) => setProductDescription(e.target.value)}></textarea> <br />
                    <input type="number" placeholder="Enter Product cost " className="form-control" required onChange={(e) => setProductCost(e.target.value)} /> <br />
                    <b>Browse/Upload Product Image</b> <br />
                    <input type="file" className="form-control" required accept="image/*" onChange={(e) => setProductPhoto(e.target.files[0])} /> <br />
                    <button className="btn btn-primary"> Upload product</button>
                </form>

            </div>
           
        </div>
    )
}
export default Addproduct