import React ,{Fragment,Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


export default class ModalComponent extends Component{
  constructor(props){
    super(props);
  }


  render(){

    return(
      <Fragment>
      <Modal isOpen={true} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{this.props.header}</ModalHeader>
        <ModalBody>
          {this.props.children}
        </ModalBody>
      </Modal>
      </Fragment>
    )
  }

  toggle = ()=>{
    this.props.toggle();
  }
}
