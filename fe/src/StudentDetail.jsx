import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'

class StudentDetail extends Component {
  constructor(props) {
    super(props);
    if (this.props.location.data){
      this.state = {
        data: this.props.location.data
      };
    } else {
      this.state = {
        data: this.props.data
      };
    }
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
          <table className="table table-sm table-bordered container">
            <tbody align="center" className="container">
              <tr>
                <th scope="row" colSpan='2'>Student ID</th>
                {/* <td colSpan='2' >{this.props.data.studentid}</td> */}
                <td colSpan='2' >{this.state.data.studentid}</td>
              </tr>
              <tr>
                <th scope="row">First Name</th>
                {/* <td>{this.props.data.firstname}</td> */}
                <td>{this.state.data.firstname}</td>
                <th scope="row">Last Name</th>
                {/* <td>{this.props.data.lastname}</td> */}
                <td>{this.state.data.lastname}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                {/* <td>{this.props.data.email}</td> */}
                <td>{this.state.data.email}</td>
                <th scope="row">Phone</th>
                {/* <td>{this.props.data.phone}</td> */}
                <td>{this.state.data.phone}</td>
              </tr>
              <tr>
                <th scope="row">URL</th>
                {/* <td>{this.props.data.url}</td> */}
                <td>{this.state.data.url}</td>
                <th scope="row">Address</th>
                {/* <td>{this.props.data.address}</td> */}
                <td>{this.state.data.address}</td>
              </tr>
              <tr>
                <th scope="row">Zip code</th>
                {/* <td>{this.props.data.zipcode}</td> */}
                <td>{this.state.data.zipcode}</td>
                <th scope="row">City</th>
                {/* <td>{this.props.data.city}</td> */}
                <td>{this.state.data.city}</td>
              </tr>
              <tr>
                <th scope="row">State</th>
                {/* <td>{this.props.data.state}</td> */}
                <td>{this.state.data.state}</td>
                <th scope="row">Comments</th>
                {/* <td>{this.props.data.comments}</td> */}
                <td>{this.state.data.comments}</td>
              </tr>
            </tbody>
          </table>
      </React.Fragment>
    )
  }
}

export default withRouter(StudentDetail)