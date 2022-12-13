import { Component, Fragment } from "react";
import Popup from 'reactjs-popup';

import { useSearchParams } from 'react-router-dom';



import Footer from "../component/layout/footer";
import HeaderTwo from "../component/layout/headertwo";
import BannerTwo from '../component/section/bannertwo';
import CollectionSectionTwo from '../component/section/collectiontwo';
import AboutSection from "../component/section/about";
import MatchSectionTwo from '../component/section/matchtwo';
import PlayerSectionTwo from '../component/section/playertwo';
import CtaSection from '../component/section/cta';
import VideoSectionTwo from '../component/section/videotwo';
import ProductSection from '../component/section/product';
import HrShape from '../component/layout/hrshape';
import SponsorSection from '../component/section/sponsor';
import BlogSection from '../component/section/blog';
import TestimonialSection from '../component/section/testimonial';
import SignUp from "./signup";
import RegistrationForm from "./RegistrationForm";
import GalleryPage from "./gallery";
import GallerySection from "../component/section/gallery";

import { Alert } from "react-bootstrap";
import CheckParam from "./checkParam";
import PassSection from "../component/section/pass";


class HomeTwo extends Component {

    
    
    render() { 
        
        return (
            <Fragment>
                {/* <HeaderTwo /> */}
                
                <BannerTwo />
                <GallerySection />
                <CtaSection imgUrl={'https://ultron-official.netlify.app/assets/images/cta/02.png'} />
                <RegistrationForm/>
                <AboutSection imgUrl={'https://ultron-official.netlify.app/assets/images/about/02.png'} />
                
                
                <Footer />
            </Fragment>
        );
    }
}
 
export default HomeTwo;