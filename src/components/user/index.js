import React ,{Fragment,Component} from "react";
import {} from 'reactstrap';


export default class User extends Component{
  constructor(props){
    super(props);
  }


  render(){
    return(
      <Fragment>
        <table className={"table"}>
        <tbody>
          <tr>
            <td>{"Login"}</td>
            <td>{this.props.data.username}</td>
          </tr>
          <tr>
            <td>{"Name"}</td>
            <td>{this.props.data.name}</td>
          </tr>
          <tr>
            <td>{"Phone"}</td>
            <td>{this.props.data.phone}</td>
          </tr>
          <tr>
            <td>{"Email"}</td>
            <td>{this.props.data.email}</td>
          </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }

  toggle = ()=>{
    this.props.toggle();
  }
}
