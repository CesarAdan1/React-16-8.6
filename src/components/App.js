import React from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../Helper/index'
import '../App.css';

class  App extends React.Component {
  state = {
    gifts: [],
    edit: true
  }

  addGift = () => {
    const { gifts } = this.state;
    
    gifts.push({ id: max_number( this.state.gifts.map(gift => gift.id))+ 1 }); //id of the last object you add

    this.setState({ gifts })
  }

  removeGift = (id) => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);

    this.setState({ gifts });
  }

  render() {
    return (
      <div>
        <h2>Gitf Giver</h2>
        <div className='gift-list'>
         {
           this.state.gifts.map(gift => {
             return (
               <Gift 
               key={ gift.id } 
               gift={gift}
               removeGift={this.removeGift}
               />
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
