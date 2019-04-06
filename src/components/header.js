import { Link } from "gatsby"
import React from "react"
import "./Header.css"

class Header extends React.Component {
  state = {
    isScrolled: false,
    props: this.props
   
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset
    if(scrollTop > 50) {
      this.setState(
       { isScrolled: true}
      )
    } else {
      this.setState(
       { isScrolled: false}
      )
    }
  

  }

    render(){
    
    return (
      <div className={this.state.isScrolled? "Header HeaderScrolled" : "Header"}>
        <div className='HeaderGroup'>
          <Link to='/'> <img src={require('../images/logo-designcode.svg')} width='30' /> </Link>
          <Link to='courses'>Courses</Link>
          <Link to='downloads'>Downloads</Link>
          <Link to='workshops'>Workshops</Link>
          <Link to='buy'><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}



export default Header
