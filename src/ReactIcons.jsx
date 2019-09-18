import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconStyle: PropTypes.string
};

const ReactIcons = ({ iconName, className, iconStyle }) => {
  let iconClass = iconName.split(/[\s-]/).shift();
  switch (iconClass) {
    case "fa":
    case "fas":
    case "far":
    case "fab":
    case "feather":
    case "linea":
    case "ion":
      return (
        <span className={className}>
          <i className={`${iconName} ${iconStyle}`} />
        </span>
      );
    case "material":
      return (
        <span>
          <i className={`${iconName} ${iconStyle}`}>{className}</i>
        </span>
      );
    default:
      return <div>Invalid Icon class</div>;
  }
};

ReactIcons.propTypes = propTypes;

export default ReactIcons;
