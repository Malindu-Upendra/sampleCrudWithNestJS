import axios from 'axios'
import {Table,Button,Form} from 'react-bootstrap'
import React from 'react'

class RetrieveData extends React.Component {

    state = {
        data : [],
        body:'',
        id:0,
        createdAt:''
    }

    componentDidMount = () => {
        axios.get('http://localhost:5000/test/feed').then(res => {
            this.setState({data:res.data});
        })
    }

    handleDelete = (id) => {
        axios.delete(`http://localhost:5000/test/feed/${id}`).then(res => {
            if(res.data.affected === 1){
                window.location.reload(false)
            }
        })
    }

    handleSelect = (data) => {
        this.setState({body:data.body})
        this.setState({id:data.id})
        this.setState({createdAt:data.createdAt})
    }

    handleUpdateDetails = (event) => {
        event.preventDefault();

        const sample = {
            id:this.state.id,
            body:this.state.body,
            createdAt:this.state.createdAt
        }

        axios.put(`http://localhost:5000/test/feed/${this.state.id}`,sample).then(res => {
            if(res.data.affected === 1){
                window.location.reload(false)
            }
        })
    }

    handleChange = (event) => {
        const {name,value} = event.target
        this.setState({[name]:value})
    }

  render() {
    return (
      <div style={{ margin: "auto", width: "90%", marginTop: "40px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>body</th>
              <th>created at</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.body}</td>
                <td>{item.createdAt}</td>
                <td>
                  <Button variant="success" onClick={this.handleSelect.bind(this,item)}>Select</Button>{" "}
                  <Button
                    variant="danger"
                    onClick={this.handleDelete.bind(this, item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="id"
                value={this.state.id}
                placeholder="ID"
                disabled
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
                placeholder="Body"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                name="createdAt"
                value={this.state.createdAt}
                placeholder="Created At"
                disabled
              />
            </Form.Group>
            <Button
              variant="warning"
              style={{ width: "100%" }}
              onClick={this.handleUpdateDetails}
            >
              Update
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default RetrieveData;
