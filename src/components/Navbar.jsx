import React, { Component } from 'react';



//Navbar code from Bootstrap.com
class Navbar extends Component {
    state = { 
        
     }

    //Styles
    navstyles = {
        borderBottom: 'solid #d2d2d2 1px',
    }
    navtextstyles = {
        color: "#FF5800",
        fontWeight: "bold",
        fontSize: 24,
        fontFamily: 'Helvetica'
    }
    render() { 
        return ( 
            <React.Fragment>
            <nav style={this.navstyles} className="navbar navbar-expand-lg bg-light">
            <a style={this.navtextstyles}className="navbar-brand" href="#">
                <img src="images/datakwip-logo-horizontal.png" alt="datakwip-logo"/>
            </a>
        </nav>
        </React.Fragment>
        );
    }
}
 
export default Navbar;