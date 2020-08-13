import React from 'react';
import styled from 'styled-components';
import avg from '../helpers/avg.js';


const Wrapper = styled.div`
  margin: 0 auto;
  width: 500px;
  height: 64px;
  border: 1px dashed red;
  font-size: 12px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;
  align-items: center;
`;

const Grid = styled.div`
  width: 1000;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 2fr;
  grid-gap: 2em;
  grid-auto-rows:75px;

  align-items: center;

  `;

const Nested = styled.div`

  height: 30px;

  font-size: 18px;
  font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
  letter-spacing: normal;

  align-items: center;
  justify-items: center;

`;

const Bar = styled.div`

  width: ${props => props.width};
  background-color: ${props => props.color};
  height: 10px;
  position: absolute;


`;

const BarCont = styled.div`

  position: relative;
  margin-top: 10px;



`;
 const Wrapper2 = styled.div`
   display: grid;

grid-template-columns: 25% 75%;
grid-template-rows: 1fr 1fr;


margin: 0 auto;


 `;
 const Span = styled.div`
 display: grid;
  justify-items: end;

 `;






const Ratings = (props) => {

  const findAvg = (item) => {
    //console.log(item)
    const numbers2 = props.reviews.map(review =>
      review[item]
    );
    const avgs2 = avg(numbers2);
    console.log(numbers2)
    return avgs2.toFixed(1);

  }





  return (


    <Grid>
    <Nested>Cleanliness</Nested>
    <Nested>
      <Wrapper2>
        <BarCont>
          <Bar width={'200px'} color={'rgb(211,211,211)'}  />
          <Bar width={`${(findAvg('cleanliness') / 5) * 200}px`} color={'black'}  />
          </BarCont>
          <Span>{findAvg('cleanliness')}</Span>
      </Wrapper2>
    </Nested>
    <Nested>Accuracy</Nested>
    <Nested>
    <Wrapper2>
        <BarCont>
          <Bar width={'200px'} color={'rgb(211,211,211)'}  />
          <Bar width={`${(findAvg('accuracy') / 5) * 200}px`} color={'black'}  />
          </BarCont>
          <Span>{findAvg('accuracy')}</Span>
      </Wrapper2>
    </Nested>
    <Nested>Communiction</Nested>
    <Nested>
    <Wrapper2>
        <BarCont>
          <Bar width={'200px'} color={'rgb(211,211,211)'}  />
          <Bar width={`${(findAvg('comm') / 5) * 200}px`} color={'black'}  />
          </BarCont>
          <Span>{findAvg('comm')}</Span>
      </Wrapper2>
    </Nested>
    <Nested>Location</Nested>
    <Nested><Wrapper2>
        <BarCont>
          <Bar width={'200px'} color={'rgb(211,211,211)'}  />
          <Bar width={`${(findAvg('loc') / 5) * 200}px`} color={'black'}  />
          </BarCont>
          <Span>{findAvg('loc')}</Span>
      </Wrapper2></Nested>
    <Nested>Check-in</Nested>
    <Nested>
    <Wrapper2>
        <BarCont>
          <Bar width={'200px'} color={'rgb(211,211,211)'}  />
          <Bar width={`${(findAvg('check_in') / 5) * 200}px`} color={'black'}  />
          </BarCont>
          <Span>{findAvg('check_in')}</Span>
      </Wrapper2>
    </Nested>
    <Nested>Value</Nested>
    <Nested>
    <Wrapper2>
        <BarCont>
          <Bar width={'200px'} color={'rgb(211,211,211)'}  />
          <Bar width={`${(findAvg('value') / 5) * 200}px`} color={'black'}  />
          </BarCont>
          <Span>{findAvg('value')}</Span>
      </Wrapper2>
    </Nested>

  </Grid>

  )

}


  export default Ratings;