import React from 'react'
import { useState,useEffect } from 'react'

const Navbar = () => {
   const[user,setUser] =useState(null)
   useEffect(()=>{
      const loggedUser=JSON.parse(localStorage.getItem("user"));
      setUser(loggedUser);
   },[]);
   const logout=()=>{
      localStorage.removeItem("user");
      setUser(null);
   }
  return (
     <section class="row">
        <div class="col-md-12">
            <nav style={{ fontFamily: "'Poppins', sans-serif" }} class="navbar navbar-expand-md bg-danger p-3">
                {/* <!-- brand  -->/ */}
                 {/* <!-- button  --> */}
                  {/* <!-- division containing links  -->// */}
                  

                  <a href="/" class="navbar-brand"> <b class="text-success">GAMERS WORLD </b></a>
                  {/* <!-- button  --> */}
                   <button class="navbar-toggler"
                   data-bs-toggle="collapse"
                   data-bs-target="#collapsenavbar">
                    <span class="navbar-toggler-icon"></span>
                   </button>
                   {/* <!-- division containiong the links --> */}
                    <div class="collapse navbar-collapse" id="collapsenavbar">
                        {/* <!-- left links  --> */}
                         <div class="navbar-nav">
                            <a href="/" class="nav-link"><img src="images/home.png" alt="" width="30px"/></a>
                            
                            <a href="/addproduct" class="nav-link"><img src="images/game.png" alt="" width="30px"/></a>
                            <a href='/videos' class="nav-link"><img src="images/video.png" alt="" width="30px"/></a> <br />
                         
                            <a href="https://www.facebook.com" style={{marginLeft:"450px"}} ><img src="images/fb.png" alt="" width="40px"/></a>
                            <a href="https://www.instagram.com" ><img src="images/ins.png" alt="" width="40px"/></a>
                           {user ? (
                              <>
                              <span className='nav-link'>Welcome {user.username}</span>
                              <button onClick={logout} className='btn btn-success'>Logout

                              </button>
                              
                              </>
                            ) : (
                              <>
                              <a href='/signin'className='nav-link'>Signin</a>
                              <a href='/signup'className='nav-link'>SignUp</a>
                              
                              </>
                            ) }
                      
                         
                         </div> <br /> <br />
                         
                    </div> <br /> <br />
                  
            </nav>
        </div>
     </section>
   
  )
}

export default Navbar
