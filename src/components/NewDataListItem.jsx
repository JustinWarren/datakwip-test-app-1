import React, { Component } from 'react';
import '../DataListItems.css';


function NewDataListItem(props){
    const items = props.items;
    const listItems = items.map(item =>
         {
            return <div className="datalist" key="item.key">
                <p>{item.text}</p>
            
            </div>
            
        })
    return(
        <div className="datalist-container">
        <div>{listItems}</div>
        </div>
    )
}
 
export default NewDataListItem;