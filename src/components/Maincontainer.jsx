import React, { Component } from 'react';
import NewDataListItem from './NewDataListItem'; //Imports NewDataListItem - sytax for importing same folder components
import DataInput from './DataInput';
import DataDisplay from './DataDisplay';
import Chart from './Chart';
import '../App.css';

class Maincontainer extends Component {
    constructor(props) {
        super(props);
        this.state= {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addDataItem = this.addDataItem.bind(this);
    }
    // state = { 
    //     dataItems: [],
    //     currentDataItem: {
    //         text: '',
    //         key: ''
    //     }
    //  }
    dataDisplayContainer = {
        border: "2px solid #d2d2d2",
        padding: 100,
        margin: 25
    }
   
    //Main wrapper styles
    wrapperStyles = {
        maxWidth: 900,
        margin: "10% auto",
        display: "flex",
    }

    userInputContainer = {
        border: "2px solid #d2d2d2",
        padding: 100
    }

    

    //Methods

    //handleInput method is attached to input field
    handleInput(e) {
        this.setState({
        currentItem: {
            text: e.target.value, //Event target value is user input
            key: Date.now() //From Youtube tutorial
            }
          })
        }

    //addDateInput is in form element and tied to onSubmit event
    addDataItem(e) {
        e.preventDefault(); //Keeps form from refreshing page
        const newDataItem = this.state.currentItem;
        console.log(newDataItem);
        if(newDataItem.text!==""){ //Check if text is empty
            const newItems=[...this.state.items, newDataItem];
            this.setState({ //Update state
                items:newItems, //This sets items to new items array
                currentItem: { //Sets currentItem back to empty values
                    text: '',
                    key: ''
                }
            })
        }
    }


    render() { 
        return ( 
            <div className="main-container">
            <DataInput addDataItem={this.addDataItem} handleInput={this.handleInput} items={this.state.items} currentItem={this.state.currentItem}/>
            <DataDisplay  dataDisplayContainer = {this.dataDisplayContainer}/>
            </div>
         );
    }
}
 
export default Maincontainer;

//Code graveyard! :)

  //This was in the AddDataForm component that I took out.  Notes from Brad Traversy
  //tutorial and setting state for three inputs
 // state = { 
    //     dataItems: [],
    //     currentItem: {
    //         text: '',
    //         key: ''
    //     }
    //     // gas: '',
    //     // electric: '',
    //     // water: ''
    //  }

    // //Taken from Brad Traversy video tutorial (1:09)
    // //For updating state within form you can use following code in setState method
    // //so long as the e.target.name matches the above name in state
    // // onChange = (e) => this.setState({[e.target.name]: e.target.value})
    // //These will take user input and set state for above values 
    // //Each is tied to the input with an onChange event
    // // updateGas = (e) => this.setState({gas: e.target.value}); 
    // // updateElectric = (e) => this.setState({electric: e.target.value}); 
    // // updateWater = (e) => this.setState({water: e.target.value});
    