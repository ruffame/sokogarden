import axios from 'axios'
import {useState} from 'react'
import { Link, useNavigate } from "react-router-dom"


const Signup= ()=> {
    let navigate = useNavigate();
    // declare the states here 
    const [username,setUsername]= useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const[phone,setPhone] = useState("")

    // three states for posting data 
    const[success,setSuccess]=useState("")
    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    // state for hide/show password 
    const[showPassword,setShowPassword]=useState(false)

    // function to handle signup with google
    const google = async () => {
        window.location.href= "https://rufus.alwaysdata.net/api/google_login"
        navigate("/")

    }

    // function to sign up /
    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait.....")
        // create an empty dgital envelop to store user inputs 
        const formdata = new FormData()
        formdata.append("username", username)
        formdata.append("email",email)
        formdata.append("password", password)
        formdata.append("phone", phone)  

        try {
            const response = await axios.post("https://rufus.alwaysdata.net/api/signup",formdata)
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setLoading("")
            setError("Something went wrong")
            
        }
        

    }


    return(
        <div className="row justify-content-center mt-4">
            <div className="col-md-6 card shadow p-3 ">
                <h1 className="text-info ">SignUp</h1>
                {/* bind the states here  */}
                
                <h1 className='text-secondary'>{loading}</h1>
                <h1 className='text-success'>{success}</h1>
                <h1 className='text-danger'>{error}</h1>
                

                <form action="" onSubmit={handlesubmit}>
                    <input type="text" className="form-control" placeholder="Enter Username"   onChange={(e)=> setUsername(e.target.value)}/> <br />
                    <input type="email" className="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} /> <br />
                    {/* <input type="password" className="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} /> <br /> */}
                    <div className='input-group' >
                        <input type= {showPassword ? "text" :"password" }  
                        className='form-control'
                        placeholder='Enter password'
                        onChange={(e)=> setPassword(e.target.value)}/>
                        <span className='input-group-text' style={{cursor:"pointer"}} onClick={()=> setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🔒":"👁"}

                        </span> <br /> 
                    </div> <br />
                    <input type="tel" className="form-control" placeholder="Enter Phone" onChange={(e)=> setPhone(e.target.value)} /> <br />
                    <button className="w-100 btn btn-info">SignUp</button> <br />
                    <p>Already have an account?  <Link to="/signin" > Sign in</Link> </p>
                    <br /> <br /> 
                    <button onClick={google} className='btn btn-secondary'>Login with google</button>

                </form>

            </div>
            
        </div>
    )
}
export default Signup
