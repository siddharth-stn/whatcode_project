import "./Footer.scss";
import Spacer from "../Spacer";

function Footer() {
    return (
        <div className='footer-container'>
            <div className='main-body'>
                <div className='logo-div'>
                    <div className="logo-img">
                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.86847 44.7871V18.6274H14.5163V37.9074H20.4311V28.1905H29.5694V44.7871H5.86847ZM44.132 6.11582V32.2209H35.4839V12.9751H29.5694V22.6031H20.4311V6.11582H44.132ZM50 37.9074V0.394394H14.5163V12.9751H0V50.5085H35.4839V37.9074H50Z" fill="#FAFAFA"/>
                        </svg>
                    </div>
                    <div className="brand-name">HETALI</div>
                </div>
                <div className='more-info'>
                    <div className='quick-links'>
                        <span>Quick Links</span>
                        <ul>
                            <li>
                                <a href='#'>Contact Us</a>
                            </li>
                            <li>
                                <a href='#'>About Us</a>
                            </li>
                            <li>
                                <a href='#'>Testimonial</a>
                            </li>
                            <li>
                                <a href='#'>Gallery</a>
                            </li>
                            <li>
                                <a href='#'>Site Map</a>
                            </li>
                        </ul>
                    </div>
                    <div className='flats'>
                        <span>Flats in Mumbai</span>
                        <ul>
                            <li>
                                <a href='#'>1 BHK Andheri West</a>
                            </li>
                            <li>
                                <a href='#'>2 BHK Andheri West</a>
                            </li>
                            <li>
                                <a href='#'>3 BHK Andheri West</a>
                            </li>
                            <li>
                                <a href='#'>1 BHL Goregaon East</a>
                            </li>
                            <li>
                                <a href='#'>2 BHL Goregaon East</a>
                            </li>
                        </ul>
                    </div>
                    <div className='projects'>
                        <span>Projects in Mumbai</span>
                        <ul>
                            <li>
                                <a href='#'>Ongoing</a>
                            </li>
                            <li>
                                <a href='#'>Upcoming</a>
                            </li>
                            <li>
                                <a href='#'>Completed</a>
                            </li>
                            <li>
                                <a href='#'>Hetali Blessings</a>
                            </li>
                            <li>
                                <a href='#'>Hetali Anuchhaya</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Spacer />
            <span>
                Copyright &copy; 2022 Hetali Enreprises - All Rights Reserved.
            </span>
        </div>
    );
}

export default Footer;
