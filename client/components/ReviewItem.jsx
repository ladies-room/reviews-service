import React from 'react';
import styled from 'styled-components';


const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  grid-auto-rows:100px;
  border:1px solid #333;
  `;

  const Nested = styled.div`
    display:grid;
    grid-row-start
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: 70px;
    grid-gap:1em;
    border:1px dashed;
   `;

    const Review = (props) => (

        <Grid>
          <Nested>{props.reviews.length}</Nested>
          <Nested>test</Nested>
          <Nested>test</Nested>
          <Nested>testtt</Nested>
          <Nested>testtt</Nested>
          <Nested>testtt</Nested>
        </Grid>




    )



  export default Review;