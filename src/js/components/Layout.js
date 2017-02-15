import React from "react";

import Header from "./Header";
import Footer from "./Footer";



export default class Layout extends React.Component {
      render() {
          var displayShowResults = true;
          let list = <li>Empty List</li>;
          if(displayShowResults){
              list = <li>Showing Show Results</li>
          }
         return (
         <div>
             <div id="header">
             <Header />
             </div>
             <div id="list"><Footer list={list}/>
             </div>
         </div>
         );
     }
}
