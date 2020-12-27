import React, { Component, useEffect, useState } from 'react'
import './SecondModal.module.css'
import M from 'materialize-css'
import Backdrop from '../../containers/Backdrop/Backdrop'
import Axios from 'axios'

const CollapseRow = (props) => {
  const [toggleClick, setToggleClick] = useState(false);
  return (
    <tbody>
      <tr className="collapse-head" onClick={() => setToggleClick(!toggleClick)}>
        <td>+</td>
        <td>{props.dataVal.tags}</td>
        <td>{props.dataVal.total}</td>
        <td>{props.dataVal.details}</td>
        <td>{props.dataVal.date}</td>
      </tr>
      {toggleClick &&
      <tr style={{"align": "ce"}}>
      <h1 id="title">React Dynamic Table</h1>
      <table id="personnel">
        <tbody>Some</tbody>
      </table>
      <hr />
      <table id="status">
        <tbody>thing</tbody>
      </table>
    </tr>
      }
    </tbody>
  );
};

export default function Modal(props) {
  const [data, setData] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let minName = props.minName
    const api = 'https://ashokafinanceministry.herokuapp.com/api/'
    const token = 'finmin00'
    const categoryTitle = props.categoryTitle
    const tagTitle = props.tag

    let config = {
      headers: { "Authorization": `Bearer ${token}` },
      params: {
        category: categoryTitle,
        tags: tagTitle
      }
    }
    Axios.get(api + minName + '/budget' + '/filter', config)
      .then(res => {
        setData(res.data);
        setReady(true);
      })
  }, []);

  const dataKeys = data? Object.keys(data): null;
  const dataValue = data; 
  console.log(data)

  const dynamicRows = dataKeys?dataKeys.map(index => {
            return (
              <CollapseRow dataVal={dataValue[index]}/>
            )}):<></>

  return (
    <div>
      {data && 
        <div className="table-responsive">
        <table className="table table-borderless">
          <thead className='thead-dark'>
              <tr >
                <th >#</th>
                <th>Tag</th>
                <th >Value</th>
                <th>Details</th>
                <th>Date</th>
              </tr>
            </thead>
            {dynamicRows}
        </table>
      </div>
      }
      
      {!data && 
      <div>
        <div className="Modal">
          Nothing to show here
        </div>
        <Backdrop clicked={props.clicked} />
      </div>
      }
  </div>

  )

}
