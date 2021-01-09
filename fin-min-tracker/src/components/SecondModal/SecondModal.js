import React, { useEffect, useState } from 'react'
import styles from './SecondModal.module.css'
import Backdrop from '../../containers/Backdrop/Backdrop'
import Axios from 'axios'
import CollapseRow from "../CollapseRow/CollapsedRow"


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
    Axios.get(api + minName + '/budget/filter', config)
      .then(res => {
        setData(res.data);
        setReady(true);
      })
  }, [props]);

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
      {ready ?
        <div className="table-responsive" >
          <table className="table table-borderless" >
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
        </div> : <div>
          <div className="Modal">
            <div className="donut"></div>
          </div>
          <Backdrop clicked={props.clicked} />
        </div>
      }
    </div >

  )

}
