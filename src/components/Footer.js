import React from 'react'
import styled from 'styled-components'



const Footer = ({data}) => (
    <div>
    {data.allContentfulLink.edges.map(edge => (
        <a key={edge.node.url} href={edge.node.url}>{edge.node.title}</a>
    ))}
    </div>
)

export default Footer