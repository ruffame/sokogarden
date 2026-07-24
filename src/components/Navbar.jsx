import React from 'react'

const Navbar = () => {
  return (
     <section class="row">
        <div class="col-md-12">
            <nav class="navbar navbar-expand-md bg-danger">
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
                            <a href="/" class="nav-link">Home</a>
                            <a href="/signin" class="nav-link">signin</a>
                            <a href="/signup" class="nav-link">signup</a>
                            <a href="/addproduct" class="nav-link">addproduct</a>
                            <a href='/videos' class="nav-link">Videos</a>
                         
                         </div>
                    </div>
            </nav>
        </div>
     </section>
   
  )
}

export default Navbar
