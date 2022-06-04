import "./Mission.scss";
import Spacer from "../Spacer";

function Mission() {
    return (
        <div className='mission-container'>
            <h2>MISSION</h2>
            <Spacer />
            <div className='content'>
                <div className='image'></div>
                <ul className='salient-points'>
                    <li>
                        <h3>Personalize</h3>
                        <p>
                            Our core idealogy is to provide personalised homes
                            to meet the very specific needs of residents.
                        </p>
                    </li>
                    <li>Committed</li>
                    <li>Quality & Service Oriented</li>
                    <li>Timely</li>
                </ul>
            </div>
        </div>
    );
}

export default Mission;
