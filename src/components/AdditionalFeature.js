import React from 'react';
import {addFeature} from "../actions/actions"
import { connect } from "react-redux";

const AdditionalFeature = props => {
  const handleClick = (e) => {
    e.preventDefault();
    props.addFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
      onClick ={handleClick}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
