import React, { Component } from 'react';
import {Doughnut, Line, Pie} from 'react-chartjs-2'; //Import 3 kinds of charts

class Chart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ['Gas', 'Electric','Heat'],
                datasets: [
                    {
                        label: 'Energy Usage',
                        data: [
                            25,
                            25,
                            50
                        ],
                        backgroundColor: [
                            '#F95A02',
                            '#1A92F1',
                            '#FCB300'
                        ]
                    }
                ]
            }
        }
    }
    render() { 
        return ( 
          <div>
              <Doughnut
            data={this.state.chartData}
            width={100}
            height={50}
            options={{ 
            }}
                />
          </div>

         );
    }
}
 
export default Chart;