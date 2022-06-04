import './Group.scss';
import Spacer from '../Spacer';

function Group () {
    return (
        <div className="group-container">
            <h2>GROUP COMPANIES</h2>
            <Spacer />
            <div className="companies">
                <div className="agri">
                    <div className="image"></div>
                    <span>Agriculture</span>
                </div>
                <div className="fossil">
                    <div className="image"></div>
                    <span>Fossil</span>
                </div>
                <div className="foods">
                    <div className="image"></div>
                    <span>Foods</span>
                </div>
            </div>
        </div>
    );
}

export default Group;