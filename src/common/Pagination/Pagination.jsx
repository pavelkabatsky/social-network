import React, { useState } from 'react';
import styles from './pagination.module.css'



export const Pagination = (props) => {
    let allPages = [];
    let totalPages = Math.ceil(props.totalItems / props.itemsOnPage);
    let portionSize = props.itemsInSection;
    let totalPortions = Math.ceil(totalPages / portionSize);

    let [portionNumber , setPortionNumber] = useState(1);


    let minPortionNumberVal = (portionNumber * portionSize) - (portionSize - 1); 
    let maxPortionNumberVal = portionNumber * portionSize; 

    for(let i = 1; i <= totalPages; i++ ) {
        allPages.push(i)
    }

    return (
        <div className={styles.pagination}>
            <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>prev</button>
            <ul>
                {allPages.filter(pageNumber => {
                    return pageNumber >= minPortionNumberVal && pageNumber<=maxPortionNumberVal ;
                })
                .map(pageNumber => {
                    return <li className={props.currentPage === pageNumber ? styles.current : null}
                                onClick={ ()=> { props.onChangePage(pageNumber)} }>{pageNumber}</li>
                })}
            </ul>
            
            <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>next</button>
        </div>
    )
}

export default Pagination;