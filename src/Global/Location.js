import React, { Component } from 'react';
import Button from '../Button';
import axios from 'axios';

class  GoogleMaps extends Component {
    state = {
        imageURL: '',
    }

    componentDidMount() {
        axios.get('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
        .then(response => {
            console.log(response.data.slider.reviews)
          this.setState({       
              highlight: response.data.slider.title,
              header: response.data.slider.reviews.comments,
              review: response.data.slider.reviews
          })
        })
        .catch(error => {
          console.log(error);
        });
    }

    render () {
        const { 
            highlight, 
            header,
            review
        } = this.state;
        return(
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              
                     
            </div>
        )
    }
}

export default GoogleMaps;