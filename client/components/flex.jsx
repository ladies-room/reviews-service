import React from 'react';
import styled from 'styled-components';


const Grid = styled.div`
  display: grid;
  grid-template-columns: 2% 20% 25%; 10px 10px; 10% 20%
  grid-template-rows: 1fr;
  align-items: end;
`;

// const Wrapper = styled.div`

//    display: flex;



//   width: 500px;
//   margin-left: 20px;
// `;

const Star = styled.span`
  font-size: 22px;
  color: rgb(255, 56, 92);;
  width: 20px
  display: grid;
  align-items: start;

  justify-self: start;
  margin-bottom: 22px;

`;

const Average = styled.div`
display: grid;
  height: 45px;
  justify-content: end;
  justify-self: start;


  font-size: 20px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;
  font-weight: 600;



`;





const Title = (props) => {
  // const findAvg = (value) => {
  //   Object.Values(props.)
  // //     const numbers2 = props.reviews.map(review =>
  // //       review.value
  // //     );
  // //     const avgs2 = avg(numbers2);
  // //     return avgs2.toFixed(1);
  //   }

  return (

      <Grid>
      <Star>&#9733;</Star>
  <Average>
    {`4.91 (${props.reviews.length} reviews)`}</Average>
      <span></span>
    </Grid>



  )

}

export default Title;