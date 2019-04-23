import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div `
    background: #F1F3F5;
    padding: 50px 0;
    position: absolute;
    bottom: 0;
`
const Text = styled.p `
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`
const Button = styled.button `
    background: linear-gradient(102.24 deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    color: white;
    boder: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
`
const LinkGroup = styled.div `

`


const Footer = ({data}) => (
    
    <FooterGroup>
        <Text>Tweet "Prototype and build apps"</Text>
        <Button>Tweet</Button>
        <LinkGroup>{data.allContentfulLink.edges.map(edge => (
        <a key={edge.node.url} href={edge.node.url}>{edge.node.title}</a>
        ))}</LinkGroup>
    </FooterGroup>
)

export default Footer