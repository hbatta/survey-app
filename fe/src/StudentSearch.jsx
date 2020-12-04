import React, { Component } from 'react'

import StudentDetail from './StudentDetail'

export default class StudentForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      item: null
    }
  }


  changeHandler = (event) => {
    fetch(`http://localhost:8080/getStudent?id=${event.target.value}`)
    .then(res => res.json())
    .then(
      (result) => {
        if (result.status === 500) {
          this.setState({
            isLoaded: false,
            item: null
          });
        } else {
          this.setState({
            isLoaded: true,
            item: result
          });
        }
      },
      (error) => {
        this.setState({
          isLoaded: false,
          error
        });
      }
    )
  };


  render() {
    return (
      <React.Fragment>
        <br/>
        <br/>
        <form className="container" >
          <input
            type="text"
            className="form-control"
            placeholder="GID"
            aria-label="GID"
            aria-describedby="basic-addon2"
          onChange={this.changeHandler}
          />
        </form>
        <br/>
        <br/>
        {this.state.isLoaded && (
          <StudentDetail data={this.state.item}/>
        )}
      </React.Fragment>
    )
  }
}
