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
         <Section text="T" progress="90%"/>
         <Section text="W" progress="80%"/>
         <Section text="T" progress="77%"/>
         <Section text="F" progress="64%"/>
         <Section text="S" progress="50%"/>
         <Section text="S" progress="44%"/>
        </div>
      </>
    )
}

export default Content