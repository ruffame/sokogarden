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
        <div class="col-md-12 text-center">
            <nav style={{
  backgroundColor: "#241B2F",
  color: "#00E5FF"
}} class="navbar navbar-expand-md  p-3">
                {/* <!-- brand  -->/ */}
                 {/* <!-- button  --> */}
                  {/* <!-- division containing links  -->// */}
                  

                  <a href="/" class="navbar-brand"> <b style={{
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "24px",
  marginLeft:"50px",
  fontWeight: "800",
  color: "#00E5FF",
  textShadow: "0 0 8px #00E5FF"
}} class="">GAMERS <br /> WORLD </b></a>
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
                            <a href="/" class="nav-link"><img src="images/home.png" alt="" width="40px"/></a>
                            
                            <a href="/addproduct" class="nav-link"><img src="images/game.png" alt="" width="40px"/></a>
                            <a href='/videos' class="nav-link"><img src="images/video.png" alt="" width="40px"/></a> <br />
                         
                            <a href="https://www.facebook.com" style={{marginLeft:"544px"}} ><img src="images/fb.png" alt="" width="40px"/></a>
                            <a href="https://www.instagram.com" ><img src="images/ins.png" alt="" width="40px"/></a>
                           {user ? (
                              <>
                              <span className='nav-link' style={{
  color: "#00E5FF",
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: "600",
  fontSize: "16px"
}}>Welcome {user.username}</span>
                              <button onClick={logout} className='btn btn-success'>Logout

                              </button>
                              
                              </>
                            ) : (
                              <>
                              <a href='/signin'className='nav-link' style={{
  color: "#00E5FF",
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: "600",
  fontSize: "16px"
}}>Signin</a>
                              <a href='/signup'className='nav-link' style={{
  color: "#00E5FF",
  fontFamily: "'Orbitron', sans-serif",
  fontWeight: "600",
  fontSize: "16px"
}}>SignUp</a>
                              
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
