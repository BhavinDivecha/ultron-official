import { Component } from "react";
import './pass.css';
import { Link } from "react-router-dom";
import queryString from 'query-string';


const title = <h2 className="mb-3"></h2>;

const subtitle = "";

const desc = '';

const btnText = 'Download';



class PassSection extends Component {
    render() { 
        const { imgUrl } = this.props;
      
      let params = queryString.parse(this.props.location.search)
      console.log(params);
      return (

        <div className="bg-img-pass">
            <div className="container-pass">
              <img src='https://s3.ap-south-1.amazonaws.com/www.blackstonegamedevelopment.in/test.png' alt="gamer-img" width="100%" height="100%"/>
            </div>
          </div>
        );
    }
}
 
export default PassSection;