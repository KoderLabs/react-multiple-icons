import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

const propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconStyle: PropTypes.string
};

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

const ReactIcons = ({ iconName, className, iconStyle }) => {
  let iconClass = iconName.split(/[\s-]/).shift();
  switch (iconClass) {
    case "fa":
    case "fas":
    case "far":
    case "fab":
    case "lba":
    case "linea":
    case "ion":
      return (
        <IconsWrapper>
          <span className={className}>
            <i className={`${iconName} ${iconStyle}`} />
          </span>
        </IconsWrapper>
      );
    case "material":
      return (
        <IconsWrapper>
          <span>
            <i className={`${iconName} ${iconStyle}`}>{className}</i>
          </span>
        </IconsWrapper>
      );
    default:
      return <div>Invalid Icon class</div>;
  }
};

ReactIcons.propTypes = propTypes;

export default ReactIcons;
