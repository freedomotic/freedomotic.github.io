import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/map.png'
import pic02 from '../assets/images/plugin.jpg'
import pic03 from '../assets/images/developer-manual.png'
import pic04 from '../assets/images/user-guide.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Freedomotic IoT Framework";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>What is Freedomotic?<br />
                                </h2>
                            </header>
                            <p>Freedomotic is an open source, flexible and secure Internet of Things (IoT) development framework. It can be used to build and manage modern smart spaces. It is targeted at individuals (home automation) as well as businesses (smart retail environments, ambient aware marketing, monitoring and analytics, etc). <br/>Freedomotic can interact with well-known automation protocols as well as with “do it yourself” solutions. It treats the web, social networks and branded frontends as first class components of the system.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon style1 major fa-code"></span></li>
                                <li><span className="icon style2 major fa-bolt"></span></li>
                                <li><span className="icon style3 major fa-camera-retro"></span></li>
                                <li><span className="icon style4 major fa-cog"></span></li>
                                <li><span className="icon style5 major fa-desktop"></span></li>
                                <li><span className="icon style6 major fa-calendar"></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Features</h2>
                            </header>
                            <p><b>Identity:</b> All things have a persistent unique identifier.</p> 
<p><b>Services:</b> The framework is centered around the concept of services for users.</p>
<p><b>Simulation:</b> Freedomotic allows you to fully run it without any sensor or actuator connected. You can configure and test your automation before buying the hardware.</p>
<p><b>Distributed:</b> Freedomotic can be run as a decentralized peer to peer network with no single point of failure. </p>
<p><b>Plugins:</b> You can install new plugins at runtime enriching the features. </p>
<p><b>Auto discovery:</b> Freedomotic can autodiscover the objects (eg: home automation devices) deployed in your real environment. No more diving into complex configuration files.</p>
<p><b>History aware:</b> It can track any status change in the environment and update them in a database for analysis.</p>
<p><b>Secure, Multilanguage and Multiuser ...</b></p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Learn and Contribute</h2>
                            </header>
                            <p>Learn how to use Freedomotic and how to work internally or develop your own plugin.</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Plugins</h3>
                            <p>Download and install a plugin to extend the functionalities of your framework.</p>
                            <ul className="actions">
                                <li><span className="button"><a href="https://bintray.com/freedomotic" target="_blank" rel="noreferrer">Go to Marketplace</a></span></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Developer Manual</h3>
                            <p>Learn the framework architecture, explore internals and write your own plugins.</p>
                            <ul className="actions">
                                <li><span className="button"><a href="https://freedomotic-developer-manual.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">Online</a></span></li>
                                <li><span className="button"><a href="https://freedomotic-developer-manual.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">PDF</a></span></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>User Manual</h3>
                            <p>How to download, install and configure your instance of Freedomotic.</p>
                            <ul className="actions">
                                <li><span className="button"><a href="https://freedomotic-user-manual.readthedocs.io/en/latest/" target="_blank" rel="noreferrer">Online</a></span></li>
                                <li><span className="button"><a href="https://freedomotic-user-manual.readthedocs.io/_/downloads/en/latest/pdf/" target="_blank" rel="noreferrer">PDF</a></span></li>
                            </ul>
                        </div>

                    </div>
                </section>
                <section id="fourth" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Join our community</h2>
                        </header>
                        <p>We have an international and an Italian community</p>
                        <ul className="actions uniform">
                            <li><span className="button special"><a href="https://groups.google.com/forum/#!forum/freedom-domotics" target="_blank" rel="noreferrer">International Community</a></span></li>
                            <li><span className="button"><a href="https://groups.google.com/forum/#!forum/freedomotic-it" target="_blank" rel="noreferrer">Italian Community</a></span></li>
                        </ul>
                    </div>
                </section>
                <section id="five" className="main special">
                    <div className="container">
                        <header className="major">
                            <h2>Want to try it?</h2>
                        </header>
                        <p>*** Dailybuilds are experimental ***</p>
                        <ul className="actions uniform">
                            <li><span className="button special"><a href="https://sourceforge.net/projects/freedomotic/files/freedomotic-commander-5.6.0-rc4.zip/download" target="_blank" rel="noreferrer">Download 5.6 RC4 version</a></span></li>
                            <li><span className="button"><a href="http://teamcity.jetbrains.com/guestAuth/repository/download/bt1177/.lastSuccessful/freedomotic-5.6.0-%7Bbuild.number%7D.zip" target="_blank" rel="noreferrer">Download the latest dailybuild</a></span></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
