import { Component, Fragment } from "react";
import Popup from 'reactjs-popup';

import { useSearchParams } from 'react-router-dom';



import Footer from "../component/layout/footer";
import BannerTwo from '../component/section/bannertwo';
import AboutSection from "../component/section/about";
import CtaSection from '../component/section/cta';
import RegistrationForm from "./RegistrationForm";
import GallerySection from "../component/section/gallery";

import { Alert } from "react-bootstrap";
import CheckParam from "./checkParam";


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