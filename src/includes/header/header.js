import React, {Fragment, Component} from "react";
import {Nav, NavItem} from 'reactstrap';
import {Link} from "react-router-dom";
import './style.scss';
import burger from "../../images/burger.png";
import {connect} from "react-redux";

class Header extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header>
                <img src={burger} id={"burger"}/>
                <ul className={"header_nav"}>
                    <li>
                        <Link to="/">Главная</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Каталог товаров</Link>
                    </li>

                    <li>
                    { this.props.auth ?
                        <Link to="/basket">Корзина</Link>
                        :
                        <Link to="/login">Корзина</Link>
                    }
                    </li>
                    <li>
                    { this.props.auth ?
                        <Link to="/catalog" onClick={this.logOut}>Выйти</Link>
                        :
                        <Link to="/login">Войти</Link>
                    }
                    </li>

                </ul>
            </header>
        )
    }

    readCookie = (cookieName) => {
        let re = new RegExp('[; ]'+cookieName+'=([^\\s;]*)');
        let sMatch = (' '+document.cookie).match(re);
        if (cookieName && sMatch) return unescape(sMatch[1]);
        return '';
    }

    componentDidMount() {
        if (this.readCookie("auth") === "true") {
            this.props.dispatch({type:"LOG_IN"});
        }
    }

    logOut = () => {
        this.props.dispatch({type: "LOG_OUT"});
        document.cookie = "auth=false; max-age=0";
        this.props.dispatch({type: "BASKET_CLEAR"});

    }



}

const mapStateToProps = (store) => {
    return {
        auth: store.auth
    }
}

export default connect(mapStateToProps)(Header);

