import { Component } from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import addData from '../../assets/data/addData';
import ListSchedule from '../../components/ListSchedule';
import './Schedule.css';

class Schedule extends Component {

  state = {
    schedule: {
      id: 0,
      status: 0,
      title: "",
      description: "",
      createdAt: new Date().getDate
    }
  }

  onChangeForm = (event) => {
    let newState = { ...this.state.schedule };
    let id = new Date().getTime();
    newState['id'] = id
    newState[event.target.id] = event.target.value;
    this.setState({
      schedule: newState,
    })

  }

  submitForm = () => {
    this.props.setData(this.state.schedule);
  }

  render() {
    return (
      <div className="schedule m-5">

        <div className="add-schedule">
          <h4>Add Data</h4>
          <InputGroup className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-default">Title</InputGroup.Text>
            <FormControl id="title" aria-label="Default" aria-describedby="inputGroup-sizing-default" onChange={this.onChangeForm} />
          </InputGroup>
          <InputGroup>
            <InputGroup.Text>Description</InputGroup.Text>
            <FormControl id="description" as="textarea" aria-label="With textarea" onChange={this.onChangeForm} />
          </InputGroup>
          <Button variant="primary" className="mt-3" onClick={this.submitForm}>Submit</Button>
        </div>


        <ListSchedule handleEditItem={(id) => this.editItem(id)} />
      </div>
    );
  }
}

const getGlobalState = (state) => {
  return { data: state.data }
}

const setGlobalState = (dispatch) => {
  return {
    setData: (data) => dispatch(addData(data))
  }
}

export default connect(getGlobalState, setGlobalState)(Schedule);