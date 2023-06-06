import React from 'react'

const Home = () => {
  return (

    
    <>
    
  {/* Carousel wrapper */}
  
  <div
    id="carouselBasicExample"
    className="carousel slide carousel-fade"
    data-mdb-ride="carousel"
  >
    {/* Indicators */}
    <div className="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    {/* Inner */}
    <div className="carousel-inner">
      {/* Single item */}
      <div className="carousel-item active">
        <img
          src="https://content.jdmagicbox.com/comp/ernakulam/m4/0484px484.x484.140206113128.a9m4/catalogue/we-create-events-panampilly-nagar-ernakulam-event-management-companies-nsobpzm660.jpg"
          className="d-block w-100"
          alt="Sunset Over the City"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Event Listing</h5>
          <p>Series of events happening</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://static.startuptalky.com/2022/05/event-listing-portals--3-.jpg"
          className="d-block w-100"
          alt="Canyon at Nigh"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Event Listing</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Single item */}
      <div className="carousel-item">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
          className="d-block w-100"
          alt="Cliff Above a Stormy Sea"
        />
        <div className="carousel-caption d-none d-md-block">
          <h5>Event Listing</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </div>
      </div>
    </div>
    {/* Inner */}
    {/* Controls */}
    <button
      className="carousel-control-prev"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  {/* Carousel wrapper */}
  <div className='row'>
  <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
  <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="https://uploads-ssl.webflow.com/5ff4e43997c4ec6aa5d646d1/603d547ed5c5fd6365dabbef_industry%20expert%20roundup%20-%20why%20are%20events%20important.png"
      className="img-fluid"
    />
    <a href="#!">
      <div
        className="mask"
        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
      />
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Event1</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#!" className="btn btn-primary">
      Button
    </a>
  </div>
</div>
</div>
<div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
  <div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="https://static.toiimg.com/photo/msid-64957021,width-96,height-65.cms"
      className="img-fluid"
    />
    <a href="#!">
      <div
        className="mask"
        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
      />
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Event2</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#!" className="btn btn-primary">
      Button
    </a>
  </div>
</div>
</div>
<div class="col-md-6 col-lg-4 mb-4 mb-md-0">
<div className="card">
  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img
      src="https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/gallery_promo_image/InVision_Shaklee_Global_Live.jpg?itok=huOoiSZJ"
      className="img-fluid"
    />
    <a href="#!">
      <div
        className="mask"
        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
      />
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Event3</h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <a href="#!" className="btn btn-primary">
      Button
    </a>
  </div>
</div>
</div>
</div>
</>


    
  )
}

export default Home