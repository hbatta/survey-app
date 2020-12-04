import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import { Link } from "react-router-dom";

class StudentFormAck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/getAllStudents")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
          // console.log(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul className="container list-group" align="center">
          <br />
          <br />
          {
            this.props.location.state.mean > 90 &&
            (
              <div className="container" align="center">
                <h1>You have won two movie tickets.</h1>
                <br />
                <br />
              </div>
            )
          }
          <h2>Your data has been stored!</h2>
          <h3 align="center">Mean: {'\u00A0'}{this.props.location.state.mean}</h3>
          <h3 align="center">standardDeviation: {'\u00A0'}{this.props.location.state.standardDeviation}</h3>
          <br />
          <br />
          {

          }
          {items.map(item => (
            <li key={item.studentid} className="list-group-item">
              <Link to={{
                pathname: "/detail",
                data: item
              }}> {item.studentid}</Link>
            </li>
          ))
          }
          <br />
          <br />
        </ul >
      );
    }
  }

}

export default withRouter(StudentFormAck); 