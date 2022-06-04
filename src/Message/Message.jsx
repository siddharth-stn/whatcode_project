import "./Message.scss";
import Spacer from "../Spacer";

function Message() {
    return (
        <div className='message-outer-container'>
            <div className='message-inner-container'>
                <h2>FOUNDER'S MESSAGE</h2>
                <div className='outer-circle'>
                    <div className='inner-circle'>
                        <div className='founder-image'></div>
                    </div>
                </div>
                <Spacer />
                <div className='founder-name'>
                    <span>Mr. Jayesh H. Pandya</span>
                </div>
                <div className='founder-quote'>
                    <p>
                        “When a customer buys a home, he is giving up a major
                        chunk of his life's savings to do so. It is imperative
                        to give him exactly what he looks for in his home.”
                    </p>
                    <p className='founder-quote-extended'>
                        We bring to our clients much wanted human values,
                        integrity, trust and an assurance of responsibility all
                        coupled with our expertise in construction, engineering
                        & management. Our biggest assets have always been our
                        small but highly trained team of professional managers
                        and engineers who are backed by a very able team of
                        administrators. We have a clear vision about building on
                        our strengths and our achievements while holding dear to
                        us our basic principles
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Message;
