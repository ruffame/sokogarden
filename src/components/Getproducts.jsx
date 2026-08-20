import axios from 'axios'
import {useState,useEffect} from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'


const Getproducts  = () =>{


    let navigate = useNavigate()
    const [loading,setLoading] =useState("")
    
    const [error,setError] =useState("")

    // declare the states for getting products 
    
    const[products,setProducts] = useState ([])
    
    // state for search and load more
    const[search,setSearch]=useState("")
    const[visibleCount,setVisibleCount]=useState(8)
    // state gor category 
    const[category,setCategory]=useState("All");
    // get categories from backened products 
    const categories =[
        "All",
        ...new Set(products.map((item)=> item.product_category)),
    ];

    // ducntion for search 
    const filtered_products =products.filter((item)=>{
        const matchesSearch=
        item.product_name.toLowerCase().includes(search.toLowerCase())||
        item.product_description.toLowerCase().includes(search.toLowerCase())
        const matchesCategory=
        category=== "All" ||
        item.product_category===category;
    return matchesSearch && matchesCategory;

    }); 


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


        <div className='row '>
            {/* carousel  */}
            <Carousel/>
            
            
            <div className='row justify-content-center mt-3 mb-3'>
                <input type="search" className='form-control w-50' placeholder='Search game....' value= {search} onChange={(e)=> setSearch(e.target.value)}/>

            </div>
            {/* category button  */}
            <div className='text-center '>
                {categories.map((item)=>(
                    <button
                        key={item}
                        className='btn btn-outline-success me-2 mb-2'
                        onClick={()=> setCategory(item)}
                        
                    
                    >
                        {item}
                    </button>
                ))}

            </div>
            {/* show selected category  */}
            <h5 className='text-center text-primary mb-4'>
                Selected Category :{category}
            </h5>
            <h1 className="text-secondary">Available Games</h1>
            <h1>{loading}</h1>
            <h1 className="text-danger">{error}</h1>
            {/* Carousel*/}
            
            {/* map the products */}
            {filtered_products.slice(0,visibleCount).map(singleproduct=>(
                
           <div className="col-md-3 p-3 mb-5">
  <div
    className="card h-100 border-0 shadow"
    style={{
      backgroundColor: "#241B2F",
      borderRadius: "15px",
      overflow: "hidden",
      transition: "0.3s"
    }}
  >
    {/* Game Image */}
    <img
  src={imagepath + singleproduct.product_photo}
  alt={singleproduct.product_name}
  style={{
    width: "100%",
    height: "200px",
    objectFit: "cover"
  }}
/>

    <div className="card-body">

      {/* Game Category */}
      <span
        className="badge mb-2"
        style={{
          backgroundColor: "#A855F7",
          color: "white"
        }}
      >
        {singleproduct.product_category}
      </span>

      {/* Game Name */}
      <h3
        style={{
          color: "#00E5FF",
          fontWeight: "700",
          marginBottom: "10px"
        }}
      >
        {singleproduct.product_name}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "#C9C3D1",
          fontSize: "14px",
          minHeight: "42px"
        }}
      >
        {singleproduct.product_description.slice(0, 60)}...
      </p>

      {/* Price */}
      <h4
        style={{
          color: "#FFD700",
          fontWeight: "bold"
        }}
      >
        Ksh {singleproduct.product_cost}
      </h4>

      {/* Purchase Button */}
      <button
        className="btn w-100 mt-3"
        style={{
          border: "2px solid #00E5FF",
          color: "#00E5FF",
          borderRadius: "8px",
          fontWeight: "bold"
        }}
        onClick={() =>
          navigate("/mpesa", { state: { singleproduct } })
        }
      >
        🎮 Purchase Now
      </button>

    </div>
  </div>
</div>
            ))} <br />
            <div className='text-center mt-3'>
                {visibleCount< filtered_products.length && (
                    <button 
                    className='btn btn-primary' 
                    onClick={()=> setVisibleCount(visibleCount+8)}>
                        Load More
                    </button>
                )}
            </div> <br />
            <Footer/>
        </div>
    )
}
export default Getproducts