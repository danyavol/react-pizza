import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class PaginationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageCount: 1,
            countOnPage: 15,
            currentPage: 1
        }
    }
/* props : {
        items: [],
        countOnPage: 2,
        togglePage: fn

}
*/

    render() {
            return (
                <Pagination aria-label="Page navigation example">
                    <PaginationItem>
                        <PaginationLink previous onClick={() => this.changePage('prev')}/>
                    </PaginationItem>
                    {this.addPaginationButtons()}
                    {this.butts.map((item,i) => item)}
                    <PaginationItem>
                        <PaginationLink next onClick={() => this.changePage('next')}/>
                    </PaginationItem>
                </Pagination>
            )
    }

    componentDidMount() {
        this.setState({countOnPage: this.props.countOnPage});
        let x = Math.floor(this.props.items.length/this.props.countOnPage);
        x < 1 ? x = 1 : null;
        this.setState({pageCount: x});
    }

    componentDidUpdate() {
        this.state.countOnPage === this.props.countOnPage ? null : this.setState({countOnPage: this.props.countOnPage});
        let x = Math.floor(this.props.items.length/this.props.countOnPage);
        x < 1 ? x = 1 : null;
        this.state.pageCount === x ? null : this.setState({pageCount: x});
    }

    addPaginationButtons = () => {
        this.butts = [];
        for (let i = 1; i <= this.state.pageCount; i++) {
            this.state.currentPage === i ?
                this.butts.push(<PaginationItem key={i} active>
                    <PaginationLink onClick={() => this.changePage(i)}>
                        {i}
                    </PaginationLink>
                </PaginationItem>)

                :
                this.butts.push(<PaginationItem key={i}>
                    <PaginationLink onClick={() => this.changePage(i)}>
                        {i}
                    </PaginationLink>
                </PaginationItem>)
        }
    }

    changePage = (page) => {
        if (page === 'prev') {
            let newPage = this.state.currentPage-1;
            this.setState({currentPage: newPage});
            this.props.togglePage(newPage, );
        } else if (page === 'next') {
            let newPage = this.state.currentPage+1;
            this.setState({currentPage: newPage});
            this.props.togglePage(newPage);
        } else {
            this.setState({currentPage: page});
            this.props.togglePage(page);
        }
    }


}
