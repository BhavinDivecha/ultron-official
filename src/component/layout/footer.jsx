import { Component } from "react";
import { Link } from "react-router-dom";

const postTitle = "SUPPORT";
const newsTitle = "Our Newsletter";
const desc = "ULTRON OFFICIAL IS PROMOTING THIS AWARENESS TO NEW YOUNG YOUTH NOW IN MUMBAI AND NAVI MUMBAI ALSO.";
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
                                            <span>Phone Number : <a href="tel:+918850818625">+918850818625</a></span>
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
                                            <span>Email : <a href="mailto:ultronofficial16@gmail.com">ultronofficial16@gmail.com</a></span>
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
                                                            <h6><a href="https://www.termsandconditionsgenerator.com/live.php?token=OWtJxkzmfRh1fZ1bk70XDO1Gn3YgKqoH">Terms & Conditions</a></h6>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="fm-item-content">
                                             <div className="fm-item-widget lab-item" key={0}>
                                                    <div className="lab-inner">
                                                        <div className="lab-content">
                                                            <h6><a href="https://www.privacypolicygenerator.info/live.php?token=NdLq0yXLzLbVOjdI4C6CG60wuxYwH0gs">Privacy Policy</a></h6>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div className="fm-item-content">
                                             <div className="fm-item-widget lab-item" key={0}>
                                                    <div className="lab-inner">
                                                        <div className="lab-content">
                                                            <h6><a href="https://www.termsfeed.com/live/ef170adf-87cc-4bd6-974b-f61c11dd1188">Returns, Refunds & Cancellation</a></h6>
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