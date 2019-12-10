import React from 'react';
import styles from './Reviews.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Reviews extends React.Component {
    state = {
        authors: []
    }
    componentDidMount = () => {
        
    }

    render(){
        const { review } = this.props;
        return(
            <div className={styles.wrapper}>
                

                <div className={styles.bookInfo}>               

                    <div className={styles.authorWrapper}>
                        {review.userId} 
                         
                    </div>
             

                    <p className={styles.rating}>Ocena: {review.grade} / 5</p>
                </div>
                <div>
                <p>{review.review}</p>
                </div>
                
            </div>
        )
    }
  
}

export default Reviews;