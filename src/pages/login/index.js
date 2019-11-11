import React ,{Fragment,Component} from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import './style.scss';
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';



class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }


    render(){
        if (this.state.redirect) {
            return <Redirect to='/catalog' />;
        } else {
            return(
                <div className={"wrapper"}>
                    <div className={"auth"}>
                        <h1>{"Авторизация"}</h1>
                        <Form onSubmit={this.checkAuth} id={"authForm"}>
                            <FormGroup row>
                                <Label for="login" sm={2}>Логин</Label>
                                <Col sm={10}>
                                    <Input type="text" name="login" id="login" placeholder="admin" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="pass" sm={2}>Пароль</Label>
                                <Col sm={10}>
                                    <Input type="text" name="pass" id="pass" placeholder="123456" />
                                </Col>
                            </FormGroup>
                            <Button>Войти</Button>
                        </Form>
                    </div>
                </div>
            )
        }
    }

    checkAuth = (e) => {
        e.preventDefault();
        let authForm = document.getElementById("authForm");
        let formData = new FormData(authForm);
        if (formData.get('login') === "admin" && formData.get('pass') === "123456" ) {
            document.cookie = "auth=true; path=/; max-age=3600";
            this.props.dispatch({type:"LOG_IN"});
            this.setState({redirect: true});
        } else {
            this.props.dispatch({ type:"ALERT_SET", data: {isOpen: true, color: "danger", text: `Данные введены неверно!`, timeOut: 3000, id: Symbol()} });
        }
    }




}

// const mapStateToProps = (store) => {
//     return {}
// }

export default connect()(LoginPage);
