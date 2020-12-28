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
        <tr style={{ "align": "ce" }}>
          <table id="summary">
            <h4>Summary</h4>
            <tbody>
              <tr>
                <th>Details</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>{props.dataVal.details}</td>
                <td>{props.dataVal.description}</td>
              </tr>
              <tr>
                <th>Date</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>{props.dataVal.date}</td>
                <td>{props.dataVal.total}</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <table id="general-info">
            <h4>General Info</h4>
            <tbody>
              <tr>
                <th>Type</th>
                <th>Category</th>
              </tr>
              <tr>
                <td>{props.dataVal.type}</td>
                <td>{props.dataVal.category}</td>
              </tr>
              <tr>
                <th>Tag</th>
                <th>Bundle</th>
              </tr>
              <tr>
                <td>{props.dataVal.tags}</td>
                <td>{props.dataVal.bundle}</td>
              </tr>
              <tr>
                <th>Added at</th>
              </tr>
              <tr>
                <td>{props.dataVal.addedAt}</td>
              </tr>
            </tbody>
          </table>
          <table id="track-transaction">
            <h4>Track Transaction</h4>
            <tbody>
              <tr>
                <th>Status</th>
                <th>Link</th>
              </tr>
              <tr>
                <td>{props.dataVal.status}</td>
                <td>{props.dataVal.link}</td>
              </tr>
            </tbody>
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

  const dataKeys = data ? Object.keys(data) : null;
  const dataValue = data;
  console.log(data)

  const dynamicRows = dataKeys ? dataKeys.map(index => {
    return (
      <CollapseRow dataVal={dataValue[index]} />
    )
  }) : <></>

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
