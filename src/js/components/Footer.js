import React from "react";

export default class Footer extends React.Component {

        render() {
        return (
          <ul>
            {this.props.list}
          </ul>
        );
      }
    }
