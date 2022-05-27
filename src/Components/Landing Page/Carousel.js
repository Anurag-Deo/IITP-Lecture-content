import React from 'react'
import Timetable from './Timetable.png'

const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselExampleCaptions"
      data-mdb-slide-to="3"
      aria-label="Slide 4"
    ></button>
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img style={{height: '90vh'}} src={Timetable} class="d-block w-100 carousel-image" alt="Wild Landscape"/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Mathematics</h5>
        <p>Get everything that you will need for your math preperation here</p> */}
      </div>
    </div>
  {/* <div class="carousel-inner" >
    <div class="carousel-item active">
      <img style={{height: '90vh'}} src="https://cdn.pixabay.com/photo/2015/11/05/08/21/geometry-1023846_960_720.jpg" class="d-block w-100 carousel-image" alt="Wild Landscape"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Mathematics</h5>
        <p>Get everything that you will need for your math preperation here</p>
      </div>
    </div> */}
    <div class="carousel-item">
      <img style={{height: '90vh'}} src="https://cdn.pixabay.com/photo/2014/12/30/05/42/source-code-583537_960_720.jpg" class="d-block w-100 carousel-image" alt="Camera"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Computer Sciences</h5>
        <p>Get all the lecture notes and also the codes for various practice exercises</p>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height: '90vh'}} src="https://cdn.pixabay.com/photo/2019/12/22/15/00/laboratory-4712721_960_720.jpg" class="d-block w-100 carousel-image" alt="Exotic Fruits"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Chemistry</h5>
        <p>Get all the lecture notes and tutorials</p>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height: '90vh'}} src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="d-block w-100 carousel-image" alt="Wild Landscape"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Physics</h5>
        <p>Get all the physics notes and materials at one place</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel
