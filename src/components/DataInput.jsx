import React, { Component } from 'react';

class DataInput extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div style = {this.userInputContainer}>
                {/*This is the user input form*/}
                    <form>
                        <div className="form-group">
                            <label>Select Data Template</label>
                            <select className="form-control form-control-lg" id="exampleFormControlSelect1">
                            <option>Template 1 (Pie Chart)</option>
                            <option>Template 2 (Bar Graph)</option>
                            <option>Template 3 (Doughnut Chart)</option>
                            </select>
                        </div>
                    </form>
                    <form onSubmit={this.props.addDataItem}>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Gas</label>
                            <input type="text"
                             name="gas"
                             class="form-control" 
                             id="formGroupExampleInput" 
                             placeholder="Input Data..." 
                             value={this.props.currentItem.text} 
                             onChange={this.props.handleInput}>   
                             </input>
                        </div>
                   
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Electric</label>
                            <input type="text"
                            name="electric"
                             class="form-control" 
                             id="formGroupExampleInput2"
                              placeholder="Input Data..." 
                              value={this.state.electric}
                            //   onChange={this.updateElectric}
                              onChange={this.onChange}>   
                              </input>
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Heat</label>
                            <input type="text"
                             name="water"
                             class="form-control" 
                             id="formGroupExampleInput2"
                              placeholder="Input Data..."
                               value={this.state.water}
                            //    onChange={this.updateWater}
                               onChange={this.onChange}>
                            </input>
                        </div>
                        <input className="btn" class="btn btn-primary" type="submit" value="Add Data"/>
                    </form>
                    {/* <NewDataListItem items = {this.state.items}/> */}
                </div>
            
            </div>
         );
    }
}
 
export default DataInput;