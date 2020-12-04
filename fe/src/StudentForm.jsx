import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class StudentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: null,
      status: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
      {
        "studentBean":
        {
          "studentid": event.target.inputGID.value,
          "firstname": event.target.inputFirstName.value,
          "lastname": event.target.inputLastName.value,
          "email": event.target.inputEmail.value,
          "phone": event.target.inputPhone.value,
          "url": event.target.inputURL.value,
          "address": event.target.inputStreetAddress.value,
          "zipcode": event.target.inputZip.value,
          "city": event.target.inputCity.value,
          "state": event.target.inputState.value,
          "comments": event.target.inputComments.value

        },
        "data": event.target.inputData.value
      }
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/addStudent", requestOptions)
      .then(response => {
        this.setState({
          status: response.status
        })
        return response.json()
      })
      .then(res => {
        if (this.state.status === 201) {
          this.setState({
            isLoaded: true,
            data: res
          }, () => {
            if (this.state.isLoaded) {
              this.props.history.push({
                pathname: '/ack',
                state: res
              });
            }
          })
        } else {
          this.setState({
            isLoaded: false,
            data: null,
            status: null
          })
        }
      })
      .catch(error => this.setState({
        isLoaded: false,
        error
      }));


  };


  render() {
    return (
      <React.Fragment>
        <h5 style={{ textAlign: "center" }}>SURVEY</h5>
        <br />

        <form autoComplete="on" className="container" onSubmit={this.handleSubmit}>
          <p id="data-error1" style={{ textAlign: "center" }}></p>
          <p id="data-error2" style={{ textAlign: "center" }}></p>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Data</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputData" name="inputData" placeholder="1, 2, 3, 4, 5, 6, 7, 8, 9, 10" required />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">GID <b style={{ color: "red" }}>*</b></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputGID" name="inputGID" placeholder="G00000000"
                autoFocus required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name <b style={{ color: "red" }}>*</b></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputFirstName" name="inputFirstName" placeholder="jane"
                required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name <b style={{ color: "red" }}>*</b></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputLastName" name="inputLastName" placeholder="doe"
                required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Street address</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputStreetAddress" name="inputStreetAddress"
                placeholder="Street 001"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="inputZip" className="col-sm-2 col-form-label">Zip</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputZip" name="inputZip" placeholder="22030" required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">City</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputCity" name="inputCity" placeholder="City" required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">State</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputState" name="inputState" placeholder="State" required />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Phone <b style={{ color: "red" }}>*</b></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputPhone" name="inputPhone"
                placeholder="+1(703)-415-6777" required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email <b style={{ color: "red" }}>*</b></label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail" name="inputEmail" placeholder="jdoe@gmail.com"
                required />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">URL</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputURL" name="inputURL" placeholder="www.jdoe.com" required />
            </div>
          </div>
          <br />
          <p>Liked most about the campus</p>
          <div style={{ paddingLeft: "195px" }}>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="cbox" value="students" name="cbox" />
              <label className="form-check-label">students</label>
            </div>
            <br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="cbox" value="location" name="cbox" />
              <label className="form-check-label">location</label>
            </div>
            <br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="cbox" value="campus" name="cbox" />
              <label className="form-check-label">campus</label>
            </div>
            <br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="cbox" value="atmosphere" name="cbox" />
              <label className="form-check-label">atmosphere</label>
            </div>
            <br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="cbox" value="dorm rooms" name="cbox" />
              <label className="form-check-label">dorm rooms</label>
            </div>
            <br />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="cbox" value="sports" name="cbox" />
              <label className="form-check-label">sports</label>
            </div>
          </div>

          <br />
          <p>Became interested in the university because</p>
          <div style={{ paddingLeft: "195px" }}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio" id="radio" value="friends" />
              <label className="form-check-label">
                friends
            </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio" id="radio" value="television" />
              <label className="form-check-label">
                television
            </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio" id="radio" value="internet" />
              <label className="form-check-label">
                internet
            </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radio" id="radio" value="other" />
              <label className="form-check-label">
                other
            </label>
            </div>
          </div>

          <br />
          <p>High-school graduation month</p>
          <div style={{ paddingLeft: "190px" }}>
            <input type="text" list="months" placeholder="January" />
            <datalist id="months">
              <option value="January"></option>
              <option value="February"></option>
              <option value="March"></option>
              <option value="April"></option>
              <option value="May"></option>
              <option value="June"></option>
              <option value="July"></option>
              <option value="August"></option>
              <option value="September"></option>
              <option value="October"></option>
              <option value="November"></option>
              <option value="December"></option>
            </datalist>

            <input type="number" name="year" id="year" placeholder="1990" />
          </div>

          <br />
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Additional comments</label>
            <textarea className="form-control" id="inputComments" name="inputComments" rows="3" required></textarea>
          </div>

          <br />
          <br />
          <label htmlFor="likelihood">Likelihood of recommending this school to other prospective
          students</label>
          <select name="likelihood" id="likelihood">
            <option value="VeryLikely">Very Likely</option>
            <option value="Likely">Likely</option>
            <option value="Unlikely">Unlikely</option>
          </select>
          <br />
          <br />
          <center>
            <button type="reset" className="btn btn-primary">Reset</button>
            {'\u00A0'}
            <button type="submit" className="btn btn-success" >Submit</button>
          </center>
          <br />
        </form>
      </React.Fragment>
    )
  }
}

export default withRouter(StudentForm); 