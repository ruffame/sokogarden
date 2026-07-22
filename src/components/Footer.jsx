import React from 'react'

const Footer = () => {
  return (
    <div>
      <section class="row p-3 bg-secondary" >
        {/* <!-- child 1 --> */}
        <div class="col-md-4">
           <img src="images/gamers.jpg" alt="" width="100%"/>
        </div>
        {/* <!-- child 2 --> */}
        <div class="col-md-4">
            <h3 class="text-center text-white">About Us</h3>
            <p class="text-white">Games are sold to peaple above <b class="text-danger bg-dark">18+</b> years old </p>
            <p class="text-dark">Playing can be addictive and can lead to lazziness and in some cases the brain gets damages due to excessive playing and lack of sleep.</p>
            <b class="text-dark bg-danger">Beware!!!</b>
        </div>
        {/* <!-- child 3  --> */}
        <div class="col-md-4">
            <h3 class="text-center text-white">Stay Connected</h3>
            <a href="https://www.facebook.com">
                <img src="images/fb.png" alt=""/>
            </a>
            <a href="https://www.instagram.com">
                <img src="images/in.png" alt=""/>
            </a>
            <a href="https://www.x.com">
                <img src="images/x.png" alt=""/>
            </a>
            <p>Follow us on all the platforms and you can contact us on <br /> tel phone +254 706633058 <br />tel phone.+254 702266254 </p>
            
        </div>
        
        
    </section>
    <footer class="bg-primary text-center p-2">
        <b class="text-danger">Developed by Ruffa.&copy;2026. Allrights reserved.</b>
    </footer>
    </div>
  )
}

export default Footer
