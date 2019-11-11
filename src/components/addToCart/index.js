import React, {Fragment, Component} from "react";
import './style.scss';
import {Link} from "react-router-dom";
import {connect} from "react-redux";


class AddToCart extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        let {auth, basket, item} = this.props;

        if (auth) {
            // пользователь авторизован
            if (basket.some((id) => id === item.id)) {
                // товар уже есть в корзине
                return <div className={"cart cart_remove"} onClick={this.removeFromCart}>{"Удалить из корзины"}</div>
            } else {
                // товара еще нету в корзине
                return <div className={"cart cart_add"} onClick={this.addToCart}>{"Добавить в корзину"}</div>
            }

        } else {
            // пользователь НЕ авторизован
            return (
                <div className={"cart cart_redirect"}>
                    <Link to={"/login"}>{"Добавить в корзину"}</Link>
                </div>)
        }
    }

    addToCart = () => {
        this.props.dispatch({type: "BASKET_ADD", data: this.props.item.id});
        // this.props.dispatch({type: "ALERT_SET",
        //     data: {
        //         isOpen: true,
        //         color: "success",
        //         text: `${this.props.item.title} добавлен в корзину`,
        //         timeOut: 3000,
        //         id: Symbol()
        //     }
        // });
    }

    removeFromCart = () => {
        this.props.dispatch({type: "BASKET_REMOVE", data: this.props.item.id});
        // this.props.dispatch({type: "ALERT_SET",
        //     data: {
        //         isOpen: true,
        //         color: "warning",
        //         text: `${this.props.item.title} удалён из корзины`,
        //         timeOut: 3000,
        //         id: Symbol()
        //     }
        // });
    }

}

const mapStateToProps = (store) => {
    return {
        auth: store.auth,
        basket: store.basket
    }
}

export default connect(mapStateToProps)(AddToCart);
