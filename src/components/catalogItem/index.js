import React ,{Fragment,Component} from "react";
import AddToCart from "../addToCart/index";
import {Link, Redirect} from 'react-router-dom';
import './style.scss';


export default class Product extends Component{
  constructor(props){
    super(props);
    this.state = {
        redirect: false
    }
  }


  render(){
     let {item} = this.props;
     if (this.state.redirect) {
         return <Redirect to={"/product/"+item.id} />
     } else {
         return(
             <div className={"prod_item"} >
                 <img className="prod_img" src={item.src} onClick={this.openProductPage} />
                 <div className={"prod_info"}>
                     <div>
                         <div className="prod_price">{item.price.toFixed(2)+" BYN"}</div>
                         <div className="prod_title" onClick={this.openProductPage}>{item.title}</div>
                     </div>
                     <AddToCart item={item}/>
                 </div>
             </div>
         )
     }

  }

  openProductPage = () => {
    this.setState({redirect: true});
  }

}


