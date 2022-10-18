import React from "react";
import { Button } from "@mui/material";

export default function Header(props) {
  return (
    <div className="header">
      <button>Add</button>
      <button>Remove</button>
      <div className="header--counter">{props.count} products found</div>
      <label className="form">
        Filter by price
        <select value={props.sort} onChange={props.handleChangeSort}>
          <option value="">Select</option>
          <option value="lowest">lowest to highest</option>
          <option value="highest">highest to lowest</option>
        </select>
      </label>
    </div>
  );
}
