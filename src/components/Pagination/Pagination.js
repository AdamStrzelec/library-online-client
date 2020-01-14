import React from 'react';
import styles from './Pagination.module.scss';
import { NavLink, Link } from 'react-router-dom';

class Pagination extends React.Component{

    state = {
        pageNr: this.props.pageNr,
        booksQuantity: 0,
        pagesQuantity: 0,
        pageItems: [],
    }

    componentDidMount = async () => {
        // if(window.location.pathname!=='/'){
        //     // this.setState({pageNr: this.props.match.params.pageNr});
        //     console.log(this.props.match.params)
        // }
        await fetch('http://localhost:4000/physicalBooks/quantity')
        .then(response => response.json())
        .then(json => {
            this.setState({booksQuantity: json.quantity})
        })
        let quantity = this.state.booksQuantity/10;
        if(quantity%1!==0){
            quantity = Math.floor(quantity) + 1;
        }
        this.setState({pagesQuantity: quantity});

        let pageItems = [];
        for(let i=0; i<this.state.pagesQuantity; i++){
            pageItems.push(i+1);
        }
        this.setState({pageItems});


    }

    pageItems = () => {

    }

    render(){
        return(
            <div className={styles.wrapper}>
                <ul>
                    {this.state.pageItems.map((pageItem, index) => 
                    <NavLink 
                        activeClassName={styles.currentPageItem} 
                        className={window.location.pathname==='/' && index+1===1 ? styles.currentPageItem : styles.pageItem}
                        to={'/page/'+parseInt(index+1)}>
                        {/* <li className={this.state.pageNr === index+1 ? 
                            styles.currentPageItem : styles.pageItem}
                            > */}
                            {index+1}
                        {/* </li> */}
                    </NavLink>
                    )}
                </ul>
            </div>
        )
    }
}

export default Pagination;
