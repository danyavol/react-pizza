import React, {Fragment, Component} from "react";
import AddToCart from "../../components/addToCart";
import "./style.scss";
import {connect} from "react-redux";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

class ProductInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            product: undefined,
            galleryImg: undefined,
            settings: {
                showPlayButton: false,
                showFullscreenButton: false,
                showNav: false
            }
        }

    }

    // https://react-slick.neostack.com/docs/example/custom-paging

    render() {
        let {product, galleryImg, settings} = this.state;
        return(
            <div className={"wrapper"}>
                <h1 className={"page_title"}>{"Пицца"}</h1>
                {
                    product !== undefined ?
                        <div className={"prod_info"}>
                            <div className={"img"}>
                                {
                                    galleryImg !== undefined ?
                                        <ImageGallery items={galleryImg} {...settings} />
                                        : null
                                }
                            </div>
                            <div className={"info"}>
                                <div className={"info_title"}>{product.title}</div>
                                <div className={"info_price"}>{product.price.toFixed(2)+" BYN"}</div>
                                <div className={"info_description"}>{product.description}</div>
                                <div> <AddToCart  item={product}/> </div>
                            </div>
                        </div>
                        :
                        <div>{"Загрузка.."}</div>
                }
            </div>
        )
    }

    componentDidMount() {
        let pizza = this.props.original.filter(item => item.id === +this.props.match.params.id)[0];
        console.log(pizza);
        let items = [];
        pizza.gallery.map((n) => {
            items.push(
                { original: n,
                thumbnail: n }
        );
        });
        console.log(items);

        this.setState({
            product: pizza,
            galleryImg: items
        });

    }


}

const mapStateToProps = (store) => {
    return {
        original: store.prods.original
    }
}

export default connect(mapStateToProps)(ProductInfo);
