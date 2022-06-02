import './Header.scss';

function Header () {
    return (
        <div className="header-container">
            <div className="logo-div">
                <div className="logo"></div>
                <div className="brand-name">HETALI</div>
            </div>
            <nav>
                <ul>
                    <li><a href="#">ABOUT US</a><div className="underline-short"></div></li>
                    <li><a href="#">PROJECTS</a><div className="underline-short"></div></li>
                    <li><a href="#">DIVERSIFICATION</a><div className="underline-short"></div></li>
                    <li><a href="#">OUR PROCESS</a><div className="underline-short"></div></li>
                    <li><a href="#">TESTIMONIALS</a><div className="underline-short"></div></li>
                    <li><a href="#">CAREERS</a><div className="underline-short"></div></li>
                    <li><a href="#">CONTACT US</a><div className="underline-short"></div></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;