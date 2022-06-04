import "./Responsibility.scss";
import Spacer from "../Spacer";

function Responsibility() {
    return (
        <div className='container-responsibility'>
            <h2>Corporate Social Responsibility</h2>
            <Spacer />
            <div className='content'>
                <ul className='salient-points'>
                    <li>
                        <h3>Education for the under-priviledged</h3>
                        <p>
                            We believe that our future lies in the holistic
                            educational foundation of the youth and we have
                            nurtured that cause by providing the necessary books
                            and monetary support to the under-privileged
                            children of Mumbai & also at several villages in
                            Gujarat. As the Trustees of the H A Desai Boarding
                            School in Matunga, Mumbai, we have been providing
                            living and hospitality services to the academically
                            bright students from the weaker monetary sections of
                            the society.
                        </p>
                    </li>
                    <li>Support for Rural Farmers</li>
                    <li>Spiritual</li>
                </ul>
                <div className='image'></div>
            </div>
        </div>
    );
}

export default Responsibility;
