import React from 'react'

const Carousel = () => {
  return (
    <section class="row">
        <div class="col-md-12 text-center">
            <div class="carousel slide" data-bs-ride="carousel" id="mycarousel">
                {/* <!-- division containing images  --> */}
                <div class="carousel-inner">
                    {/* <!-- div with image 1  --> */}
                    <div class="carousel-item active text-center bg-dark">
                        <img src="images/new-grand-theft-auto-v-grand-theft-auto-5-game-wallpaper-preview.jpg" alt="slide1" width="50%"/>
                    </div>
                    {/* <!-- div with image 2  --> */}
                    <div class="carousel-item bg-dark">
                        <img src="images/cod cold war.jpeg" alt="slide2" width="28%"/>
                    </div>
                    {/* <!-- div with image 3  --> */}
                    <div class="carousel-item bg-dark">
                        <img src="images/long3.webp" ALT="SLIDE 3" width="45%"/>

                    </div>
                    {/* <!-- div with image 4  --> */}
                    <div class="carousel-item bg-dark">
                        <img src="images/carousel3.webp" alt="slide4" width="28%"/>
                    </div>
                </div>
                {/* <!-- previous conttrol icon  --> */}
                <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bg-danger"></span>
                </a>
                {/* <!-- the next control icon  --> */}
                <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                    <span class="carousel-control-next-icon bg-danger"></span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Carousel
