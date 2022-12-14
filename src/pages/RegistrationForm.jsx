import { Component, Fragment } from "react";
import queryString from 'query-string';
import { Link } from "react-router-dom";
import Footer from "../component/layout/footer";
import Header from "../component/layout/header";
import PageHeader from "../component/layout/pageheader";
import SocialMedia from "../component/section/socialmedia";
import CheckParam from "./checkParam";
import AddRazorPayScript from "./AddRazorPayScript";

const title = "Register Now";

class RegistrationForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            regFName: '',
            regLName: '',
            regEmail: '',
            regNumber: '',
            regPrice:'50',
        };
    }
    render() { 
        return (
            <Fragment>
                <CheckParam />
                {/* <PageHeader title={'REGISTRATION PAGE'} curPage={'Sign Up'} /> */}
                <div className="login-section padding-top padding-bottom" id="RegistrationPage">
                    <div className=" container">
                        <div className="account-wrapper">
                            <h3 className="title">{title}</h3>
                            {/* <form className="account-form" action="https://c9b0-203-194-105-197.ngrok.io/Payment/payUHash.php" method="POST"> */}
                            {/* <form className="account-form"> */}
                            <div className="account-form">
                            <div className="form-group">
                                    <input
                                        type="text"
                                        name="OrderID"
                                        id="OrderID"
                                        hidden
                                    />
                                </div>
                            <div className="form-group">
                                    <input
                                        type="text"
                                        name="firstname"
                                        id="firstname"
                                        value={this.state.regFName}
                                        required
                                        onChange={(e)=>{this.setState({regFName: e.target.value});}}
                                        placeholder="Name *"
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="email"
                                        id="email"
                                        required
                                        value={this.state.regEmail}
                                        onChange={(e)=>{this.setState({regEmail: e.target.value});}}
                                        placeholder="Your email *" 
                                    />
                                </div>
                                <div className="form-group">
                                    <input 
                                        type="text"
                                        name="mnumber"
                                        id="mnumber"
                                        required
                                        value={this.state.regNumber}
                                        onChange={(e)=>{this.setState({regNumber: e.target.value});}}
                                        placeholder="Mobile Number" 
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        name="amount"
                                        id="amount"
                                        style={{ color: "#9ca0b7" }}
                                        onChange={(e)=>{this.setState({regPrice: e.target.value});}}
                                    >
                                        <option value="50">Normal pass</option>
    <option value="799" >VIP pass</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label><h4>Price: { this.state.regPrice}Rs</h4></label>
                                </div>
                               
                                <div className="form-group">
                                    <button onClick={AddRazorPayScript} className="d-block default-button" id="GetPassNow"><span>Get Pass Now</span></button>
                            </div>
                            </div>
                            {/* </form> */}
                           
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
 
export default RegistrationForm;