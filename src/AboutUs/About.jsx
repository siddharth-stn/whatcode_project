import "./About.scss";

import Spacer  from '../Spacer';

function About() {
    return (
        <div className='about-container'>
            <h2>About Us</h2>
            <Spacer className='spacer-short' />
            <div className='banner-hero'></div>
            <div className='about-main'>
                <div className='quote'>
                    <p>
                        We endeavour to build homes which make it's residents
                        happy and proud of their address. Residents are at heart
                        of everything we do, we build homes to live in, not
                        houses to stay in.
                    </p>
                </div>
                <Spacer className='spacer-long' />
                <div className='cards'>
                    <div className='card-one'>
                        <div className='card-one-logo'>
                            <svg
                                width='76'
                                height='88'
                                viewBox='0 0 76 88'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M25.5 6.50854V0.258545H50.5V6.50854H25.5ZM34.875 53.071H41.125V29.1127H34.875V53.071ZM38 87.6544C32.8611 87.6544 28.0174 86.6648 23.4687 84.6856C18.9201 82.7065 14.9444 80.0155 11.5417 76.6127C8.13889 73.2099 5.44792 69.2342 3.46875 64.6856C1.48958 60.137 0.5 55.2933 0.5 50.1544C0.5 45.0155 1.48958 40.1717 3.46875 35.6231C5.44792 31.0745 8.13889 27.0988 11.5417 23.696C14.9444 20.2933 18.9201 17.6023 23.4687 15.6231C28.0174 13.644 32.8611 12.6544 38 12.6544C42.6528 12.6544 47.0278 13.4356 51.125 14.9981C55.2222 16.5606 58.8681 18.7308 62.0625 21.5085L67.375 16.196L71.75 20.571L66.4375 25.8835C68.9375 28.6613 71.0729 32.0294 72.8437 35.9877C74.6146 39.946 75.5 44.6683 75.5 50.1544C75.5 55.2933 74.5104 60.137 72.5312 64.6856C70.5521 69.2342 67.8611 73.2099 64.4583 76.6127C61.0556 80.0155 57.0799 82.7065 52.5312 84.6856C47.9826 86.6648 43.1389 87.6544 38 87.6544ZM38 81.4044C46.6806 81.4044 54.059 78.3662 60.1354 72.2898C66.2118 66.2134 69.25 58.8349 69.25 50.1544C69.25 41.4738 66.2118 34.0953 60.1354 28.019C54.059 21.9426 46.6806 18.9044 38 18.9044C29.3194 18.9044 21.941 21.9426 15.8646 28.019C9.78819 34.0953 6.75 41.4738 6.75 50.1544C6.75 58.8349 9.78819 66.2134 15.8646 72.2898C21.941 78.3662 29.3194 81.4044 38 81.4044Z'
                                    fill='url(#paint0_linear_2_212)'
                                />
                                <defs>
                                    <linearGradient
                                        id='paint0_linear_2_212'
                                        x1='0.5'
                                        y1='43.9563'
                                        x2='82.4767'
                                        y2='43.9563'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop stop-color='#0F497E' />
                                        <stop offset='1' stop-color='#53CAF5' />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p>
                            Our track record has been impeccable with project
                            completion on time and have surpassed expectations
                            many a time, society members have positively
                            received our redevelopment plans and encourage our
                            modern and urbane designs to their neighbours.
                        </p>
                    </div>
                    <div className='card-two'>
                        <div className='card-two-logo'>
                            <svg
                                width='84'
                                height='84'
                                viewBox='0 0 84 84'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M16.2708 83.7584L25.9583 52.0917L0.333332 33.7584H32L42 0.425049L52 33.7584H83.6667L58.0417 52.0917L67.7292 83.7584L42 64.175L16.2708 83.7584ZM27.7292 66.7792L42 55.9459L56.2708 66.7792L50.5417 48.7584L63.6667 40.2167H47.9375L42 22.1959L36.0625 40.2167H20.3333L33.4583 48.7584L27.7292 66.7792Z'
                                    fill='url(#paint0_linear_2_216)'
                                />
                                <defs>
                                    <linearGradient
                                        id='paint0_linear_2_216'
                                        x1='0.333332'
                                        y1='42.0915'
                                        x2='91.4186'
                                        y2='42.0915'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop stop-color='#0F497E' />
                                        <stop offset='1' stop-color='#53CAF5' />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p>
                            The Hetali Group is a redeveloper like no other with
                            a profound focus on quality and long term
                            satisfaction of its residents.
                        </p>
                    </div>
                    <div className='card-three'>
                        <div className='card-three-logo'>
                            <svg
                                width='92'
                                height='84'
                                viewBox='0 0 92 84'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M45.4792 77.5085C45.8264 77.5085 46.2257 77.4217 46.6771 77.2481C47.1285 77.0744 47.493 76.8487 47.7708 76.571L82.875 41.3626C83.7778 40.4599 84.4548 39.4356 84.9062 38.2897C85.3576 37.1439 85.5833 35.9807 85.5833 34.8001C85.5833 33.6196 85.3576 32.439 84.9062 31.2585C84.4548 30.0779 83.7778 29.0362 82.875 28.1335L64.125 9.38346C63.2222 8.48069 62.1805 7.8036 61 7.35221C59.8194 6.90082 58.6389 6.67513 57.4583 6.67513C56.2778 6.67513 55.1146 6.90082 53.9687 7.35221C52.8229 7.8036 51.7986 8.48069 50.8958 9.38346L49.0208 11.2585L57.4583 19.8001C58.3611 20.7724 59.1597 21.9008 59.8542 23.1855C60.5486 24.4703 60.8958 25.8765 60.8958 27.4043C60.8958 30.0432 59.8715 32.3696 57.8229 34.3835C55.7743 36.3974 53.4305 37.4043 50.7917 37.4043C49.0555 37.4043 47.6146 37.1439 46.4687 36.6231C45.3229 36.1022 44.2639 35.3557 43.2917 34.3835L35.6875 26.7793L16.8333 45.6335C16.4861 45.9807 16.243 46.3453 16.1042 46.7272C15.9653 47.1092 15.8958 47.5085 15.8958 47.9251C15.8958 48.8279 16.191 49.5744 16.7812 50.1647C17.3715 50.755 18.118 51.0501 19.0208 51.0501C19.4375 51.0501 19.8368 50.946 20.2187 50.7376C20.6007 50.5293 20.9305 50.2862 21.2083 50.0085L35.5833 35.6335L39.9583 40.0085L25.6875 54.2793C25.3403 54.6265 25.0972 55.0085 24.9583 55.4251C24.8194 55.8418 24.75 56.2585 24.75 56.6751C24.75 57.5085 25.0625 58.2376 25.6875 58.8626C26.3125 59.4876 27.0417 59.8001 27.875 59.8001C28.2917 59.8001 28.691 59.7133 29.0729 59.5397C29.4548 59.3661 29.7847 59.1404 30.0625 58.8626L44.4375 44.4876L48.8125 48.8626L34.5417 63.1335C34.2639 63.4112 34.0382 63.7758 33.8646 64.2272C33.691 64.6786 33.6042 65.1126 33.6042 65.5293C33.6042 66.3626 33.9167 67.0918 34.5417 67.7168C35.1667 68.3418 35.8958 68.6543 36.7292 68.6543C37.1458 68.6543 37.5278 68.5849 37.875 68.446C38.2222 68.3071 38.5694 68.064 38.9167 67.7168L53.2917 53.3418L57.6667 57.7168L43.2917 72.0918C42.9444 72.439 42.7014 72.821 42.5625 73.2376C42.4236 73.6543 42.3542 74.0362 42.3542 74.3835C42.3542 75.3557 42.6319 76.1196 43.1875 76.6751C43.743 77.2307 44.5069 77.5085 45.4792 77.5085ZM45.4792 83.7585C43.1875 83.7585 41.1389 82.9078 39.3333 81.2064C37.5278 79.505 36.4514 77.4043 36.1042 74.9043C33.743 74.5571 31.7639 73.5849 30.1667 71.9876C28.5694 70.3904 27.5972 68.4112 27.25 66.0501C24.8889 65.7029 22.9271 64.7133 21.3646 63.0814C19.8021 61.4494 18.8472 59.4876 18.5 57.196C15.9305 56.8487 13.8125 55.8071 12.1458 54.071C10.4792 52.3349 9.64582 50.2515 9.64582 47.821C9.64582 46.6404 9.87152 45.4599 10.3229 44.2793C10.7743 43.0987 11.4514 42.0571 12.3542 41.1543L35.6875 17.821L47.1458 29.2793C47.7014 29.8349 48.309 30.2689 48.9687 30.5814C49.6285 30.8939 50.2708 31.0501 50.8958 31.0501C51.7986 31.0501 52.6493 30.6508 53.4479 29.8522C54.2465 29.0536 54.6458 28.2029 54.6458 27.3001C54.6458 26.8835 54.5243 26.4147 54.2812 25.8939C54.0382 25.373 53.6389 24.8349 53.0833 24.2793L38.1875 9.38346C37.2847 8.48069 36.243 7.8036 35.0625 7.35221C33.8819 6.90082 32.7014 6.67513 31.5208 6.67513C30.3403 6.67513 29.1771 6.90082 28.0312 7.35221C26.8854 7.8036 25.8611 8.48069 24.9583 9.38346L9.12499 25.2168C8.15277 26.189 7.47568 27.2133 7.09374 28.2897C6.71179 29.3661 6.4861 30.564 6.41666 31.8835C6.34721 33.2724 6.60763 34.6092 7.19791 35.8939C7.78818 37.1786 8.49999 38.3418 9.33332 39.3835L4.85416 43.8626C3.46527 42.3349 2.3368 40.4946 1.46874 38.3418C0.600684 36.189 0.166656 34.0015 0.166656 31.7793C0.166656 29.696 0.565962 27.6994 1.36457 25.7897C2.16318 23.88 3.29166 22.196 4.74999 20.7376L20.4792 5.00846C22.0069 3.48069 23.743 2.35221 25.6875 1.62305C27.6319 0.893879 29.6111 0.529297 31.625 0.529297C33.6389 0.529297 35.6007 0.893879 37.5104 1.62305C39.4201 2.35221 41.1389 3.48069 42.6667 5.00846L44.5417 6.88346L46.4167 5.00846C47.9444 3.48069 49.6805 2.35221 51.625 1.62305C53.5694 0.893879 55.5486 0.529297 57.5625 0.529297C59.5764 0.529297 61.5382 0.893879 63.4479 1.62305C65.3576 2.35221 67.0764 3.48069 68.6041 5.00846L87.25 23.6543C88.7778 25.1821 89.9236 26.9182 90.6875 28.8626C91.4514 30.8071 91.8333 32.7862 91.8333 34.8001C91.8333 36.814 91.4514 38.7758 90.6875 40.6856C89.9236 42.5953 88.7778 44.314 87.25 45.8418L52.1458 80.946C51.243 81.8488 50.2187 82.5432 49.0729 83.0293C47.9271 83.5154 46.7292 83.7585 45.4792 83.7585Z'
                                    fill='url(#paint0_linear_2_221)'
                                />
                                <defs>
                                    <linearGradient
                                        id='paint0_linear_2_221'
                                        x1='0.166657'
                                        y1='42.1437'
                                        x2='100.36'
                                        y2='42.1437'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop stop-color='#0F497E' />
                                        <stop offset='1' stop-color='#53CAF5' />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p>
                            They just don't endeavour but build homes which make
                            it's residents proud of their address by putting
                            home-owners at the heart and soul of everything they
                            do from start to finish and post completion.
                        </p>
                    </div>
                    <div className='card-four'>
                        <div className='card-four-logo'>
                            <svg
                                width='88'
                                height='88'
                                viewBox='0 0 88 88'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M76.2083 57.1126V23.571L54.3333 8.25846L32.4583 23.571V37.0085H26.2083V20.446L54.3333 0.341797L82.4583 20.446V57.1126H76.2083ZM56.4167 29.5085H60.5833V25.3418H56.4167V29.5085ZM48.0833 29.5085H52.25V25.3418H48.0833V29.5085ZM56.4167 37.8418H60.5833V33.6751H56.4167V37.8418ZM48.0833 37.8418H52.25V33.6751H48.0833V37.8418ZM54.9583 87.6335L22.5625 78.3626V84.3001H0.166666V43.2585H32.3542L58.9167 53.2585C60.7917 53.9529 62.3715 55.0814 63.6562 56.6439C64.941 58.2064 65.5833 60.446 65.5833 63.3626H77.4583C80.375 63.3626 82.8055 64.4043 84.75 66.4876C86.6944 68.571 87.6667 71.3835 87.6667 74.9251V77.6335L54.9583 87.6335ZM6.41667 78.0501H16.2083V49.5085H6.41667V78.0501ZM54.5417 81.1751L81.2083 73.0501C80.7917 71.7307 80.2708 70.8279 79.6458 70.3418C79.0208 69.8557 78.2917 69.6126 77.4583 69.6126H55.8958C53.8125 69.6126 51.8854 69.4737 50.1146 69.196C48.3437 68.9182 46.6597 68.5362 45.0625 68.0501L36.625 65.446L38.9167 59.4043L46.5208 61.9043C48.2569 62.4599 49.9062 62.8418 51.4687 63.0501C53.0312 63.2585 55.5139 63.3626 58.9167 63.3626C58.9167 62.5293 58.7604 61.7133 58.4479 60.9147C58.1354 60.1161 57.5972 59.5432 56.8333 59.196L31.3125 49.5085H22.5625V71.8001L54.5417 81.1751Z'
                                    fill='url(#paint0_linear_2_225)'
                                />
                                <defs>
                                    <linearGradient
                                        id='paint0_linear_2_225'
                                        x1='0.166666'
                                        y1='43.9874'
                                        x2='95.8062'
                                        y2='43.9874'
                                        gradientUnits='userSpaceOnUse'>
                                        <stop stop-color='#0F497E' />
                                        <stop offset='1' stop-color='#53CAF5' />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p>
                            Hetali Group lives by the ethos of building homes to
                            live and not houses to stay in.
                        </p>
                    </div>
                </div>
                <div className='horizontal-partition'></div>
                <div className='main-conclusion'>
                    <p>
                        Established in 1992, Hetali Group is a leading real
                        estate developer of residential spaces across Mumbai and
                        have earned an unmatched reputation amongst its very
                        loyal customers. The company's customer-centric values,
                        project management proficiency and technical expertise
                        are amplified with over 6.5 lakh sq.ft. built and almost
                        1 lakh sq.ft underway leading to more than families!{" "}
                    </p>
                    <p>
                        The Hetali Group promises a lifestyle second to none. In
                        a span of over four decades, the group has proved to be
                        one of the most reputed real estate builders in the
                        western suburbs of Mumbai with residences in prime
                        locations such as Andheri, Goregaon, Vile Parle and
                        Juhu.{" "}
                    </p>
                    <p>
                        Spearheaded by Mr Jayesh Pandya, the company's central
                        ideology is to provide homes customized to the
                        customer's requirements and home’s that are superior in
                        nature keeping in mind the needs of the modern home
                        user.
                    </p>
                </div>
            </div>
            <div className='credit'>Photo by Amanda Marie on Unsplash</div>
        </div>
    );
}

export default About;
