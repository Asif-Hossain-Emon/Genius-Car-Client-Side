import React from 'react';
import './Banner.css'

const BannerData = ({slide}) => {

    const {image, id, prev, next}=slide

    return (
        
            <div id={`slide${id}`} className="carousel-item relative w-full h-3/4">
            <div className='carousel-img'>
            <img src={image} alt="" className="w-full rounded-xl" />
            </div>   
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
            <h1 className='text-5xl font-bold text-white'>
                Affordable <br/>
                Price For Car  <br/>
                Servicing
            </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24   top-2/4">
            <p className='text-white font-xl '>
            There are many variations of passages of available, but <br/> the majority have suffered alteration in some form
            </p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  bottom-1/4">
            <button className="btn btn-warning mr-5">Discover More</button>
            <button className="btn btn-error">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
              <a href= {`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
              <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
  </div>
            

    )
};

export default BannerData;