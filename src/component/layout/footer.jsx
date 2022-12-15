import { Component } from "react";
import { Link } from "react-router-dom";
import Rating from "../section/rating";
import SocialMedia from '../section/socialmedia';

const postTitle = "SUPPORT";
const newsTitle = "Our Newsletter";
const desc = "Upropriate brand economca sound technolog after covalent technology enable prospective wastng markets whereas propriate and brand economca sound technolog";
const newsdesc = "Bigamer esports organization supported by community leaders";



class Footer extends Component {
    constructor(props){
        super(props);
        this.state = {
            newsName: '',
            newsEmail: '',
        };
    }
    render() { 
        return (
            <footer className="footer-section">
                <div className="footer-top">
                    <div className="container">
                        <div className="row g-3 justify-content-center g-lg-0">
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/01.png" alt="Phone-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Phone Number : +918850818625</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/02.png" alt="email-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Email : ultronofficial16@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                                <div className="footer-top-item lab-item">
                                    <div className="lab-inner">
                                        <div className="lab-thumb">
                                            <img src="assets/images/footer/icons/03.png" alt="location-icon" />
                                        </div>
                                        <div className="lab-content">
                                            <span>Address : SIES COLLEGE nerul Navi Mumbai</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-middle padding-top padding-bottom" style={{backgroundImage: "url(/assets/images/footer/bg.jpg)"}}>
                    <div className="container">
                        <div className="row padding-lg-top">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title mb-4">
                                            <img src="assets/images/logo/logo.png" alt="logo" />
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">{desc}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                {/* <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title mb-4">
                                            <img src="assets/images/logo/logo.png" alt="logo" />
                                        </div>
                                        <div className="fm-item-content">
                                            <p className="mb-4">{desc}</p>
                                            
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="footer-middle-item-wrapper">
                                    <div className="footer-middle-item mb-lg-0">
                                        <div className="fm-item-title">
                                            <h4>{postTitle}</h4>
                                        </div>
                                        <div className="fm-item-content">
                                             <div className="fm-item-widget lab-item" key={0}>
                                                    <div className="lab-inner">
                                                        <div className="lab-content">
                                                            <h6><Link to="/blog-single">About</Link></h6>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="fm-item-content">
                                             <div className="fm-item-widget lab-item" key={0}>
                                                    <div className="lab-inner">
                                                        <div className="lab-content">
                                                            <h6><Link to="/blog-single">Terms & Conditions</Link></h6>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="fm-item-content">
                                             <div className="fm-item-widget lab-item" key={0}>
                                                    <div className="lab-inner">
                                                        <div className="lab-content">
                                                            <h6><Link to="/blog-single">Privacy Policy</Link></h6>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="fm-item-content">
                                             <div className="fm-item-widget lab-item" key={0}>
                                                    <div className="lab-inner">
                                                        <div className="lab-content">
                                                            <h6><Link to="/blog-single">Returns, Refunds & Cancellation</Link></h6>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="footer-bottom-content text-center">
                                    <p>&copy;2022 <Link to="/">Ultron</Link> - Offcial.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-12">
                                {/* <div className="footer-bottom-content text-center">
                                    <p>&copy;2022 <Link to="/">Ultron</Link> - Offcial.</p>
                                </div> */}
                            </div>
                            <div className="col-lg-4  col-12">
                                <div className="footer-bottom-content text-center">
                                    <p>Design and Developed by <a href="https://saurabhshinde.site/">Saurabh Shinde</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;