import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Title = styled.h1`
  color: #b19cd9;
`

const Content = () => {
    return (
        <>
        <Title>Progress Tracker</Title>
        <div>
         <Section text="M"/>
         <Section text="T"/>
         <Section text="W"/>
         <Section text="T"/>
         <Section text="F"/>
         <Section text="S"/>
         <Section text="S"/>
        </div>
      </>
    )
}

export default Content