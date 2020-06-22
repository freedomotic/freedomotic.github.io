import React from 'react'
import logo from '../assets/images/freedomotic-logo.png'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <img src={logo} width="400" alt=""/>
                    <h2>Open IoT Framework</h2>
                    <h3>Thing Wider</h3>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
