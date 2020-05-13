import React from 'react'
import Caroucel from './Caroucel.css'
import CaroucelItem from './Caroucel-item'
import ImageOne from '../../../assets/IMAGENS/promocoes/promotion1.jpeg'
import ImageTwo from '../../../assets/IMAGENS/promocoes/promotion2.jpeg'

export default props =>
<React.Fragment>

<div id="carouselPromotion" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselPromotion" data-slide-to="0" className="active"></li>
    <li data-target="#carouselPromotion" data-slide-to="1"></li>
  </ol>
  <div className="carousel-inner">
    <CaroucelItem img={ImageOne} state="active" imgAlt="First slide" />
    <CaroucelItem img={ImageTwo} state="" imgAlt="Second slide" />
  </div>
  <a className="carousel-control-prev" href="#carouselPromotion" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselPromotion" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</React.Fragment>
