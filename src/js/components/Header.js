import React from "react";

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            };
    }
    handleClick() {
        // const add = this.list;
        this.setList({ list: []});
    }

   render() {
       return (
           <div className= "todoListMain">
            <div className = "header">
                <form>
                    <input placeholder="what is there to do"></input>
                    <button type="submit" onClick={() => alert('click')}>add</button>
                </form>
            </div>
           </div>
       );
   }
}
