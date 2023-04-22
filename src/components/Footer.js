import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://twitter.com/freedomotic" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.facebook.com/Freedomotic-Open-Source-Building-Automation-189816744396642" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://www.linkedin.com/groups/5099925" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                    <li><a href="https://github.com/freedomotic" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="https://www.youtube.com/playlist?list=PLCbSCJEIR6CpZd7sEI2YTWkFObGCgTj45" className="icon alt fa-youtube"><span className="label">YouTube</span></a></li>
                    <li><a href="https://www.slideshare.net/freedomotic/" className="icon alt fa-slideshare"><span className="label">SlideShare</span></a></li>
                    <li><a href="mailto:info@freedomotic-iot.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; 2009-2023 Freedomotic Team</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
