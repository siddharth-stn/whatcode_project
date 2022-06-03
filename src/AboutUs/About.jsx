import './About.scss';


function Spacer (props) {
    return (
        <div className={`spacer ${props.className}`}>
                <div className="horizontal left-side"></div>
                <div className="logo"></div>
                <div className="horizontal right-side"></div>
        </div>
    );
}


function About () {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <Spacer className="spacer-short"/>
            <div className="banner-hero"></div>
            <div className="about-main">
                <div className="quote">
                    <p>
                        We endeavour to build homes which make it's residents happy and proud of their address. 
                        Residents are at heart of everything we do, we build homes to live in, not houses to stay in. 
                    </p>
                </div>
                <Spacer className="spacer-long"/>
                <div className="cards">
                    <div className="card-one">
                        <div className="card-one-logo"></div>
                        <p>
                        Our track record has been impeccable with project 
                        completion on time and have surpassed expectations 
                        many a time, society members have positively
                        received our redevelopment plans and encourage our
                        modern and urbane designs to their neighbours. 
                        </p>
                    </div>
                    <div className="card-two">
                        <div className="card-two-logo"></div>
                        <p>
                        Our track record has been impeccable with project 
                        completion on time and have surpassed expectations 
                        many a time, society members have positively
                        received our redevelopment plans and encourage our
                        modern and urbane designs to their neighbours. 
                        </p>
                    </div>
                    <div className="card-three">
                        <div className="card-three-logo"></div>
                        <p>
                        Our track record has been impeccable with project 
                        completion on time and have surpassed expectations 
                        many a time, society members have positively
                        received our redevelopment plans and encourage our
                        modern and urbane designs to their neighbours. 
                        </p>
                    </div>
                    <div className="card-four">
                        <div className="card-four-logo"></div>
                        <p>
                        Our track record has been impeccable with project 
                        completion on time and have surpassed expectations 
                        many a time, society members have positively
                        received our redevelopment plans and encourage our
                        modern and urbane designs to their neighbours. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;