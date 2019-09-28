import React from "react";
import { Helmet } from "react-helmet";

class IconsWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.0.4/css/all.css"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://unpkg.com/@icon/linea-basic/linea-basic.css"
          />

          <link
            href="https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css"
            rel="stylesheet"
          />
        </Helmet>
        {this.props.children}
      </div>
    );
  }
}

export default IconsWrapper;
