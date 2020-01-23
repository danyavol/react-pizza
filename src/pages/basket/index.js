import React ,{Fragment,Component} from "react";
import {connect} from 'react-redux';
import "./style.scss";

class BasketPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            prodsInBasket: []
        }
    }


    render(){
        let {prodsInBasket} = this.state;
        return(
            <div className={"wrapper"}>
                 <h1 className={"page_title"}>{"Корзина"}</h1>
                {
                    prodsInBasket.length > 0 ?
                        prodsInBasket.map((item,i) =>
                            <div className={"basket_item_container"} key={i}>
                                <div className={"basket_item"}>
                                    <img className={"basket_preview"} src={item.src} />
                                    <p className={"basket_title"}>{item.title}</p>
                                    <div className={"basket_price"}>{item.price.toFixed(2)+"BYN"}</div>
                                    <div className={"basket_remove"}>
                                        <img src={"images/basketRemove.png"} onClick={() => this.remove(item.id)} />
                                    </div>
                                </div>

                            </div>
                        )
                        :
                        <h4>{"Корзина пуста"}</h4>
                }
                {
                    prodsInBasket.length > 0 ?
                        <div className={"basket_total"}>{"Итого: "+this.totalPrice()}</div>
                        : null
                }
            </div>
        )
    }

    componentDidMount() {
        this.updateBasket();
    }

    updateBasket = () => {
        let {basket, prods} = this.props;
        let newData = [];
        for (let i = 0; i < basket.length; i++) {
            let product = prods.filter((item) => item.id === basket[i]);
            if (product.length > 0) {
                newData.push(product[0]);
            }
        }
        this.setState({prodsInBasket: newData });
    }

    totalPrice = () => {
        let total = 0;
        this.state.prodsInBasket.forEach(item => total += item.price);
        return total.toFixed(2)+" BYN";
    }

    remove = (id) => {
        this.props.dispatch({type: "BASKET_REMOVE", data: id});
        let newState = this.state.prodsInBasket.filter(item => item.id !== id);
        this.setState( {prodsInBasket: newState} );
    }



}

const mapStateToProps = (store) => {
    return {
        basket: store.basket,
        prods: store.prods.original
    }
}
export default connect(mapStateToProps)(BasketPage);
