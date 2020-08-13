import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Title from './flex.jsx';
import Ratings from './Rating.jsx';
import Review from './Reviewitem.jsx';

const ENDPOINT = '/listings/3/reviews';

const Div = styled.div`
  display: grid;
  width: 1200px;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 2fr 4fr;
  border: solid blue;
  height 1200;
  margin 0 auto;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
    this.getReviews = this.getReviews.bind(this);
  }

  componentDidMount() {
    axios.get(ENDPOINT)
      .then(this.getReviews)
      .catch(console.log);
  }

  getReviews(res) {
    this.setState({ reviews: res.data });


  }

  render() {
    return (

      <div>
        {this.state.reviews.length > 0 ? <Title reviews={this.state.reviews} /> : null}
        {this.state.reviews.length > 0 ? <Ratings reviews={this.state.reviews} /> : null}
        {this.state.reviews.length > 0 ? <Review reviews={this.state.reviews} /> : null}


      </div>

    );
  }
}

export default App;