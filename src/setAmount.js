import React, { Component } from "react";



class SetAmount extends Component {


    setAmount = (e) => {

        this.props.setCounter(parseInt(this.dicesAmount.value))
     
    }



    render() {
        return (
            <div>
               
                    <label htmlFor="number" > Ilość kości:</label>
                    <input name="number" type="number" ref={input => this.dicesAmount = input} min="1" max="12" placeholder="0" />
                    <input type="submit" value="zatwierdź" onClick={() => { this.setAmount() }} />
                
            </div>)





    }
}

export default SetAmount;