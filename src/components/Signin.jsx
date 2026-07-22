import { Link,useNavigate } from "react-router-dom"
import axios from 'axios'
import{useState} from 'react'
const Signin= ()=> {
    let navigate = useNavigate();
    // declare the states here 
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState("")
    const [success,setSuccess] = useState("")
    const [error,setError] = useState("")
    const[showPassword,setShowPassword]=useState(false)

    // function handle submit 
    const handlesubmit =async (e) => {
        e.preventDefault()
        setLoading("please wait .....")
        // digital envelop
        const formdata = new FormData()
        formdata.append("email",email)
        formdata.append("password",password)

        try {
            const response = await axios.post("https://rufus.alwaysdata.net/api/signin",formdata)
            setSuccess(response.data.message)
            setLoading("")
            // redirct user to get produts page 
            // nb:: upon login successfull
            if(response.data.user){
                // it means login successful 
                navigate("/")
            } 
            
        } catch (error) {
            setLoading("")
            setError(error.message)
            
            
        }
    }

    return(
        <div className="row justify-content-center mt-3">
            <div className="col-md-6 card shadow p-3">
                <h1 className="text-info">Sign In</h1>
                <h1>{loading}</h1>
                <h1 className="text-success">{success}</h1>
                <h1 className="text-danger">{error}</h1>
                <form action="" onSubmit={handlesubmit}>
                    <input type="email" className="form-control" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/> <br />
                    {/* <input type="password" className="form-control" placeholder="password" onChange={(e) => setPassword(e.target.value)} /> <br /> */}
                    <div className='input-group' >
                        <input type= {showPassword ? "text" :"password" }  
                        className='form-control'
                        placeholder='Enter password'
                        onChange={(e)=> setPassword(e.target.value)}/>
                        <span className='input-group-text' style={{cursor:"pointer"}} onClick={()=> setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🔒":"👁"}

                        </span> <br />
                    </div>
                    <button className="btn btn-info form-control">Sign in</button>
                    <p>Don't have an account ? <Link to="/signup" >Sign Up</Link>    </p>
                </form>

            </div>
            
        </div>
    )
}
export default Signin