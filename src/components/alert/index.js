import React, {Fragment} from "react";
import {Alert} from 'reactstrap';
import './style.css';
import {connect} from "react-redux";

/*
props.data = {
color,
isOpen,
text,
timeOut
}

 */

class AlertComponent extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <Alert id={"alert_style"} color={this.props.data.color} isOpen={this.props.data.isOpen}
                       toggle={this.toggleAlert} >
                    {this.props.data.text}
                </Alert>
                { this.timer() }
            </Fragment>

        )
    }

    timer = () => {
        // Таймер закрытия алерта
        let id = this.props.data.id;
        this.props.data.timeOut ?
            setTimeout(() => {this.props.data.isOpen && id === this.props.data.id ? this.toggleAlert() : null},
                this.props.data.timeOut)
            : null
    }

    toggleAlert = () => {
        this.props.dispatch({ type: "ALERT_SET", data: {isOpen: !this.props.data.isOpen} });
    }

}

const mapStateToProps = (store) => {
    return {
        data: store.alert
    }
}
export default connect(mapStateToProps)(AlertComponent)
