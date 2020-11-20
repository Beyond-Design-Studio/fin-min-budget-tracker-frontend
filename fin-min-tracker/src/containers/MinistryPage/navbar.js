import React, {Component} from 'react';
import './home.css'
 
class navbar extends Component {
    render() {
        return(
        <div className="Header">
            <table>
                <td className="ministry">Finance Ministry</td>
                <td></td>
                <td className="Name">BUDGET TRACKER</td>
                <td className="Contact">Contact Us</td>
            </table>
        </div>        
        )
    }
}
 
 
 
export default navbar