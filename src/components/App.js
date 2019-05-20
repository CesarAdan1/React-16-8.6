import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import '../App.css';

class  App extends React.Component {
  state = {
    gifts: [],

  }

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);

    const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    gifts.push({ id: max_id + 1 }); //id of the last object you add

    this.setState({ gifts })
  }

  render() {
    return (
      <div>
        <h2>Gitf Giver</h2>
        <div className='gift-list'>
         {
           this.state.gifts.map(gift => {
             return (
               <Gift key={ gift.id } />
             )
           })
         }
        </div>
        <Button 
        className='btn-add'
        onClick={this.addGift}
        >Add Gift</Button>
      </div>
      );
  }
}

export default App;