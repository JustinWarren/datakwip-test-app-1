import React from 'react';
import Chart from './Chart';

function DataDisplay(props) {
   
        return (  
            <div>
                {/*This is the container for data output on the right*/}
                <div style={props.dataDisplayContainer}>
                    <Chart />
                </div>
            </div>
        );
}
 
export default DataDisplay;