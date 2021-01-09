import React, {useState} from "react";
import {format} from 'date-fns'

import CollapseRowTranscations from "../CollapseRowTransactions/CollapseRowTransactions";

const data = {
  "addedAt": 1606111913,
  "bundle": false,
  "category": "Intercollegiate Funds",
  "date": 1603584000,
  "description": "info info info",
  "details": "no6",
  "link": "www",
  "status": "Sent to OSL",
  "tags": "Biswamil",
  "total": 200,
  "type": "earnings"
}

const CollapseRow = (props) => {
  const [toggleClick, setToggleClick] = useState(false);
  return (
    <tbody>
      <tr style={{cursor: "pointer"}} className="collapse-head" onClick={() => setToggleClick(!toggleClick)}>
        <td>{toggleClick ? "▼" : "▶"}</td>
        <td>{props.dataVal ? props.dataVal.tags : data.tags}</td>
        <td>{props.dataVal ? props.dataVal.total : data.total}</td>
        <td>{props.dataVal ? props.dataVal.details : data.details}</td>
        <td>{props.dataVal ? format(new Date(props.dataVal.date), 'dd/MM/yyyy') : data.date}</td>
      </tr>
      {toggleClick &&
        <tr>
          <td colSpan="5">
            <CollapseRowTranscations transition={props.dataVal}></CollapseRowTranscations>
          </td>
        </tr>
      }
    </tbody >
  );
};


export default CollapseRow;
