import axios from 'axios';
import React from 'react';
import {Form,Button} from 'react-bootstrap'

class AddData extends React.Component {

    state = {
        body:''
    }

    handleChange = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }

    handleSubmitDetails = (event) => {
        event.preventDefault();

        const sample = {
            body:this.state.body
        }

        axios.post('http://localhost:5000/test/feed',sample).then(res => {
            console.log(res)
            window.location.reload(false)
        })
    
    }

    render() { 
        return (
          <div style={{margin:"auto",width:"90%",marginTop:"40px",marginBottom:"40px"}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" name="body" onChange={this.handleChange} placeholder="Body" />
              </Form.Group>
              <Button variant="info" style={{width:'100%'}} onClick={this.handleSubmitDetails}>
                Insert
              </Button>
            </Form>
          </div>
        );
    }
}
 
export default AddData;