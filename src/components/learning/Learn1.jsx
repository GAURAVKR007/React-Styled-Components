import React from 'react'
import styled, {keyframes} from 'styled-components'
import Button from './Button'
import Icon from './Icon'

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const Title = styled.h1`
    color: #aaecf0;
    animation: 5s ${fadeIn} ease-in-out;
`

const SubTitle = styled(Title)`
    font-size: 12px;
    align-self: center;
`

const Section = styled.div`
    background-color: #aac9f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 15px;
`

const ParagraphTitle = styled(SubTitle)`
    color: grey;
`

const Learn1 = () => {
    return (
        <>
        <h1>Hello world!</h1>
        <Section>
            <Title>💅🏻 Section</Title>
            <SubTitle>I am a Subtitle</SubTitle>
            <Button primary text="First Button"/>
            <Button text="Second Button"/>
            <Icon primary/>
            <Icon status="complete"/>
            <ParagraphTitle>I am a paragraph</ParagraphTitle>
        </Section>
        </>
    )
}

export default Learn1