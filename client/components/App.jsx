import React from 'react';
import axios from 'axios';


const ENDPOINT = '/listings/3/reviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    axios.get(ENDPOINT)
      .then((res) => {
        this.setState({ reviews: res.data });
      })
      .catch(console.log);
  }

  render() {
    return (

      <div>

        <p>THIS WORKS!</p>
        <p>{this.state.reviews.length}</p>
      </div>

    );
  }
}

export default App;
