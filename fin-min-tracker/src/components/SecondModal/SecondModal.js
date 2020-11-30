import React, { Component } from 'react'
import styles from './SecondModal.module.css'
import Backdrop from '../../containers/Backdrop/Backdrop'
import Axios from 'axios'
export default class Modal extends Component {
  state = {
    data: null,
    ready: false
  }
  componentDidMount() {
    let minName = this.props.minName
    const api = 'https://ashokafinanceministry.herokuapp.com/api/'
    const token = 'finmin00'
    const categoryTitle = this.props.categoryTitle
    const tagTitle = this.props.tag

    let config = {
      headers: { "Authorization": `Bearer ${token}` },
      params: {
        category: categoryTitle,
        tags: tagTitle
      }
    }
    Axios.get(api + minName + '/budget' + '/filter', config)
      .then(res => {
        // console.log(res.data);
        this.setState({
          data: res.data,
          ready: true
        })
      })

  }
  componentDidUpdate() {
    if (!this.state.ready) {
      let minName = this.props.minName
      const api = 'https://ashokafinanceministry.herokuapp.com/api/'
      const token = 'finmin00'
      const categoryTitle = this.props.categoryTitle
      const tagTitle = this.props.tag

      let config = {
        headers: { "Authorization": `Bearer ${token}` },
        params: {
          category: categoryTitle,
          tags: tagTitle
        }
      }
      Axios.get(api + minName + '/budget' + '/filter', config)
        .then(res => {
          // console.log(res.data);
          this.setState({
            data: res.data,
            ready: true
          })
        })
    }
  }
  render() {
    let dataTables = 'Nothing to Show Here'
    if (this.state.data) {
      const dataArray = Object.keys(this.state.data)
      const data = this.state.data
      dataTables = dataArray.map((element, index) => {
        const { bundle, category, addedAt, description, details, link, status, tags, total, type } = this.state.data[element]
        console.log(new Date(addedAt));
        return (
          <>
            <h5>{index}</h5>
            <table className={styles.Table}>
              <tr>
                <th>
                  Category
              </th>
                <td>{category}</td>
              </tr>
              <tr>
                <th>
                  Tag
              </th>
                <tr>
                  {tags}
                </tr>
              </tr>
              <tr>
                <th>
                  Description
              </th>
                <tr>
                  {description}
                </tr>
              </tr>
              <tr>
                <th>
                  Date
              </th>
                <tr>
                  {addedAt}
                </tr>
              </tr>
              <tr>
                <th>
                  Details
              </th>
                <tr>
                  {details}
                </tr>
              </tr>
              <tr>
                <th>
                  Value
              </th>
                <tr>
                  {total}
                </tr>
              </tr>
              <tr>
                <th>
                  Status
              </th>
                <tr>
                  {status}
                </tr>
              </tr>
              <tr>
                <th>
                  Link
              </th>
                <tr>
                  {link}
                </tr>
              </tr>
            </table>
          </>

        )
      })
    }

    return (
      <div>

        <div className={styles.Modal}>
          {dataTables}

        </div>

        <Backdrop clicked={this.props.clicked} />
      </div>


    )
  }

}
