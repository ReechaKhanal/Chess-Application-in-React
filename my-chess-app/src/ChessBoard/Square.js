import React from "react";
import './Square.css';

class ChessSquare extends React.Component{
    render(){
        const styles = {
          buttonStyle: {
              backgroundColor: this.props.color,
          }  
        };
        
        return(
            <button className = "SquareBox" style = {styles.buttonStyle} onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}
export default ChessSquare;