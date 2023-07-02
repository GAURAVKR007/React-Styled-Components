import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.div`
  background-color: #ffffff;
  border: solid 3px grey;
  margin: 4px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #ff6961;
`

const WeekdayTitle = styled.div`
  display: flex;
  justify-content: center;
  width: 50px;
  border-right: solid 3px lightgrey;
`

const WeekendTitle = styled(WeekdayTitle)`
  background-color: lightgrey;
`
const ProgressBar = styled.div`
    background-color: ${({progress}) => {
       let numeric =  progress.slice(0,-1)
       let integer = parseInt(numeric)
       
       if (integer >= 80) return 'orange';
       else if (integer >= 60) return 'lightblue';
       else if (integer >= 40) return 'green';
       else return 'green';

    }};
    height: 50px;
    width: ${({progress}) => progress || '0%'};
`

const ProgressSection = styled.div`
    width: 250px;
`

function Section(props) {
  return (
    <StyledSection>
        {
            props.text === 'S' ? <WeekendTitle>{props.text}</WeekendTitle> : <WeekdayTitle>{props.text}</WeekdayTitle>
        }
        <ProgressSection>
            <ProgressBar progress={props.progress}/>
        </ProgressSection>
        
    </StyledSection>
  )
}

export default Section