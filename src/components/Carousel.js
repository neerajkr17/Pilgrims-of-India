import React from "react";

function Carousel() {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.gujarattourism.com/content/dam/gujrattourism/images/religious-sites/dwarkadhish-temple/Dwarkadhish-Temple-Banner.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.getyourguide.com/img/location/6023dbcb71489.jpeg/99.jpg" className="d-block w-100" style={{ height: '700px' }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.india-travel-packages.in/images/bodhgaya.jpg" className="d-block w-100" style={{ height: '700px' }} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );
}

export default Carousel;