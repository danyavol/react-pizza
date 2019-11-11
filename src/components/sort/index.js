import React, {Component} from "react";
import {connect} from 'react-redux';
import './style.scss';


class SortComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: {
                // 0 - сортировка по возрастанию
                // 1 - по убыванию
                titleClicks: undefined,
                priceClicks: undefined
            }
        }
    }


    render() {

        return (
            <div className={"sort_catalog"}>
                <div onClick={this.sortOriginal}>Оригинал</div>
                {
                    this.state.sort.titleClicks === 0 ?
                        <div onClick={this.sortByTitle}>По названию \/</div>
                        :
                        this.state.sort.titleClicks === 1 ?
                            <div onClick={this.sortByTitle}>По названию /\</div>
                            :
                            this.state.sort.titleClicks === undefined ?
                                <div onClick={this.sortByTitle}>По названию</div> : null
                }

                {
                    this.state.sort.priceClicks === 0 ?
                        <div onClick={this.sortByPrice}>По цене \/</div>
                        :
                        this.state.sort.priceClicks === 1 ?
                            <div onClick={this.sortByPrice}>По цене /\</div>
                            :
                            this.state.sort.priceClicks === undefined ?
                                <div onClick={this.sortByPrice}>По цене</div> : null
                }
            </div>
        )
    }

    sortOriginal = () => {
        let {original} = this.props;
        this.props.dispatch({type:"PRODS_OUTPUT_SET", data: original});
        this.setState({ sort: {} });
    }

    sortByTitle = () => {
        let {original} = this.props;
        let {titleClicks} = this.state.sort;
        let newArr;
        if (titleClicks === 1 || titleClicks === undefined) {
            newArr = this.sort(original, 'title', false);
            this.setState({sort: {titleClicks: 0}});
        } else {
            newArr = this.sort(original, 'title', true);
            this.setState({sort: {titleClicks: 1}});
        }

        this.props.dispatch({type:"PRODS_OUTPUT_SET", data: newArr});
    }

    sortByPrice = () => {
        let {original} = this.props;
        let {priceClicks} = this.state.sort;
        let newArr;
        if (priceClicks === 1 || priceClicks === undefined) {
            newArr = this.sort(original, 'price', false);
            this.setState({sort: {priceClicks: 0}});
        } else {
            newArr = this.sort(original, 'price', true);
            this.setState({sort: {priceClicks: 1}});
        }

        this.props.dispatch({type:"PRODS_OUTPUT_SET", data: newArr});
    }

    sort = (arr, filter = 'title', reverse = false) => {
        let newArr = JSON.parse(JSON.stringify(arr));
        for (let i = 0; i < newArr.length - 1; i++) {
            for (let j = i + 1; j < newArr.length; j++) {
                if (reverse) {
                    // по убыванию
                    if (newArr[i][filter] < newArr[j][filter]) {
                        let temp = newArr[i];
                        newArr[i] = newArr[j];
                        newArr[j] = temp;
                    }
                } else {
                    // по возрастанию
                    if (newArr[i][filter] > newArr[j][filter]) {
                        let temp = newArr[i];
                        newArr[i] = newArr[j];
                        newArr[j] = temp;
                    }
                }
            }
        }
        return newArr;
    }

}

const mapStateToProps = (store) => {
    return {
        original: store.prods.original
    }
}

export default connect(mapStateToProps)(SortComponent);
