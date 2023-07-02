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
         <Section text="M" progress="100%"/>
         <Section text="T" progress="80%"/>
         <Section text="W" progress="60%"/>
         <Section text="T" progress="57%"/>
         <Section text="F" progress="99%"/>
         <Section text="S" progress="87%"/>
         <Section text="S" progress="97%"/>
        </div>
      </>
    )
}

export default Content