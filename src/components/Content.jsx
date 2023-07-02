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
         <Section text="M" progress="100%" day={1}/>
         <Section text="T" progress="90%" day={2}/>
         <Section text="W" progress="80%" day={3}/>
         <Section text="T" progress="77%" day={4}/>
         <Section text="F" progress="64%" day={5}/>
         <Section text="S" progress="50%" day={6}/>
         <Section text="S" progress="44%" day={0}/>
        </div>
      </>
    )
}

export default Content