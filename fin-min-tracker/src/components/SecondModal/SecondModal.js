import React, { Component, useEffect, useState } from 'react'
import styles from './SecondModal.module.css'
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
        <div className={styles.DetailsContainer} >
          <div className={styles.SummaryDash}>
            <h4 className={styles.SummaryHeader}>Summary</h4>
            <p className={styles.SummaryTitle1}>Details</p>
            <p className={styles.SummaryTitle2}>Description</p>
            <p className={styles.SummaryValue1}>{props.dataVal.details}</p>
            <p className={styles.SummaryValue2}>{props.dataVal.description}</p>
            <p className={styles.SummaryTitle3}>Date</p>
            <p className={styles.SummaryTitle4}>Total</p>
            <p className={styles.SummaryValue3}>{props.dataVal.date}</p>
            <p className={styles.SummaryValue4}>{props.dataVal.total}</p>
          </div>
          <div className={styles.GeneralDash}>
            <h4 className={styles.GeneralHeader}>General Info</h4>
            <p className={styles.GeneralTitle1}>Type</p>
            <p className={styles.GeneralTitle2}>Category</p>
            <p className={styles.GeneralTitle3}>Tag</p>
            <p className={styles.GeneralTitle4}>Bundle</p>
            <p className={styles.GeneralTitle5}>Added at</p>
            <p className={styles.GeneralValue1}>{props.dataVal.type}</p>
            <p className={styles.GeneralValue2}>{props.dataVal.category}</p>
            <p className={styles.GeneralValue3}>{props.dataVal.tags}</p>
            <p className={styles.GeneralValue4}>{props.dataVal.bundle ? 'Yes' : 'No'}</p>
            <p className={styles.GeneralValue5}>{props.dataVal.addedAt}</p>
          </div>
          <div className={styles.TrackDash}>
            <h4 className={styles.TrackHeader}>Track Transaction</h4>
            <p className={styles.TrackTitle1}>Status</p>
            <p className={styles.TrackTitle2}>Link</p>
            <p className={styles.TrackValue1}>{props.dataVal.status}</p>
            <p className={styles.TrackValue2}>{props.dataVal.link}</p>
          </div>
        </div>
      }
    </tbody >
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
    <div className={styles.Modal}>
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
