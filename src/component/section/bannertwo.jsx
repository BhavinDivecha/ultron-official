import { Component } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

let BannerListContent = [
    {
        bgImgUrl: 'https://ultron-official.netlify.app/assets/images/banner/home-2/bg.jpg',
        title: 'Welcome to',
        subtitle: 'ULTRON OFFICIAL',
        desc: '',
        btnText: 'Register Now',
    }
]

class BannerTwo extends Component {
    render() { 
        return (
            <div className="banner__slider overflow-hidden">
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    // loop={'true'}
                >
                    {BannerListContent.map((val, i) => (
                        <SwiperSlide key={i}>
                            <div className="banner" style={{backgroundImage: `url(${val.bgImgUrl})`}}>
                                <div className="container">
                                    <div className="row g-0">
                                        <div className="col-lg-6 col-12">
                                            <div className="banner__content">
                                                <h1>{val.title}</h1>
                                                <h2>{val.subtitle}</h2>
                                                <p>{val.desc}</p>
                                                {/* <Link to="#RegistrationPage" className="default-button"><span>{val.btnText}  <i className="icofont-play-alt-1"></i></span> </Link> */}
                                                <a href="#RegistrationPage" className="default-button"><span>{val.btnText} <i className="icofont-play-alt-1"></i></span></a>
                                        {/* <Link to="/RegistrationPage" className="default-button"><span>{btnText} <i className="icofont-circled-right"></i></span></Link> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
}
 
export default BannerTwo;