import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Card from "../components/Card"
import Section from "../components/Section";
import Wave from "../components/Wave"
import staticdata from "../../staticdata.json"
import Cell from "../components/Cell"
import reactImage from "../images/logo-react.png"
import styled from "styled-components"

const SectionCaption = styled.h2 `
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div `
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px){
    grid-template-columns: repeat(1, 1fr);
    
  }

`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to design and code React apps</h1>
        <p>Complete course about the best tools and design systems.</p>
        <Link to="/page-2/">Watch the video</Link>

        <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-figma.png")} width="50" />
          <img src={require("../images/logo-react.png")} width="50" />
          <img src={require("../images/logo-sketch.png")} width="50" />
          <img src={require("../images/logo-studio.png")} width="50" />
          <img src={require("../images/logo-swift.png")} width="50" />

        </div>

      <Wave />

      </div>
      <div className="Cards">
        <h2>11 more courses coming</h2>
        <Card title="React for designers"
        text="12 sections"
        image={require("../images/wallpaper.jpg")}
        />
        <Card title="React native"
        text="15 sections"
        image={require("../images/wallpaper.jpg")}
        />
      </div>
      <Section 
      image={require("../images/wallpaper2.jpg")}
      logo={require("../images/logo-react.png")}
      title="React for designers"
      text="Learn how to build a modern site using React and the most efficient tools. Get you site up and running, hosted with netlify."
      />
      <SectionCaption>12 sections - 6 hours</SectionCaption>
      <SectionCellGroup>
      {
        staticdata.cells.map(cell => (
          <Cell
          image={reactImage}
          title={cell.title}
          key={staticdata.cells.indexOf(cell)}
          />
        ))
      }
      </SectionCellGroup>
   
    </div>
    
    
   
    
  </Layout>
)

export default IndexPage




