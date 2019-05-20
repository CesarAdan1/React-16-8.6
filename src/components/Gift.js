import React, { Component } from 'react'
import { Form, FormGroup, 
    FormControl, Label, 
    Button } from 'react-bootstrap';


export default class Gift extends Component {
    state= {
        person: '',
        present: ''
    };

  render() {
    return (
      <div>
        <Form>
            <FormGroup>
                <Form.Label>Person</Form.Label>
                <FormControl 
                    className='input-person'
                    onChange={e => this.setState({ 
                        person: e.target.value
                    })}
                />
            </FormGroup>
            <FormGroup>
                <Form.Label>Present</Form.Label>
                <FormControl
                    className="input-present"
                    onChange={e => this.setState({
                        present: e.target.value
                    })}
                />
            </FormGroup>
        </Form>
      </div>
    )
  }
}
