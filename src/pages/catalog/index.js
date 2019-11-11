import React, {Fragment, Component} from "react";
import {connect} from 'react-redux';

import CatalogItem from "../../components/catalogItem/index";
import Sort from "../../components/sort/index";

class CatalogPage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        let {output} = this.props;
        return(
            <Fragment>
                <div className={"wrapper"}>
                    <h1 className={"page_title"}>{"Каталог товаров"}</h1>
                    <Sort />
                    <div className={"prods_container"}>
                        {
                            Array.isArray(output) && output.length !== 0 ?
                                output.map((item,i) =>
                                    <CatalogItem item={item} key={i}/>
                                )
                                : 'Идёт загрузка'
                        }
                    </div>
                </div>
            </Fragment>

        )
    }

    componentDidMount() {
        let {original} = this.props;
        this.props.dispatch({type:"PRODS_OUTPUT_SET", data: original});
    }


}

const mapStateToProps = (store) => {
    return {
        original: store.prods.original,
        output: store.prods.output
    }
}

export default connect(mapStateToProps)(CatalogPage);
