import { Component } from "react";


const subtitle = "";
const title = "ESPORTS AWARENESS PROGRAMME";
const desc = "ESPORTS AWARENESS IN INDIA AS WELL AS MUMBAI ALSO JOINING THIS COMMUNITY. AND ULTRON OFFICIAL IS PROMOTING THIS AWARENESS TO NEW YOUNG YOUTH NOW IN MUMBAI AND NAVI MUMBAI ALSO.";


let AboutListContent = [
    {
        imgUrl: 'https://ultron-official.netlify.app/assets/images/about/icon-1.png',
        imgAlt: 'About Icon',
        title: '20k+ Community Earning',
        desc: 'Join the 20K+ community earning event and become a top earning member! Join us now!',
    },
    {
        imgUrl: 'https://ultron-official.netlify.app/assets/images/about/icon-2.png',
        imgAlt: 'About Icon',
        title: '1m+ Registered Players',
        desc: 'We are so excited to announce that we now have over one million registered players!',
    }
]



class AboutSection extends Component {
    render() { 
        const {imgUrl} = this.props;
        return (
            <section className="about-section">
                <div className="container">
                    <div className="section-wrapper padding-top">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="about-image">
                                    <img src={imgUrl} alt="about-image" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-10">
                                <div className="about-wrapper">
                                    <div className="section-header">
                                        <p>{subtitle}</p>
                                        <h2>{title}</h2>
                                    </div>
                                    <div className="about-content">
                                        <p>{desc}</p>
                                        <ul className="about-list">
                                            {AboutListContent.map((val, i) => (
                                                <li className="about-item d-flex flex-wrap" key={i}>
                                                    <div className="about-item-thumb">
                                                        <img 
                                                            src={`${val.imgUrl}`} 
                                                            alt={`${val.imgAlt}`}
                                                        />
                                                    </div>
                                                    <div className="about-item-content">
                                                        <h5>{val.title}</h5>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default AboutSection;