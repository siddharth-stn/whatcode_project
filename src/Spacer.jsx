function Spacer(props) {
    return (
        <div className={`spacer ${props.className}`}>
            <div className='horizontal left-side'></div>
            <div className='logo'>
                <svg
                    width='50'
                    height='52'
                    viewBox='0 0 50 52'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M5.86847 45.3704V19.2107H14.5163V38.4907H20.4311V28.7737H29.5694V45.3704H5.86847ZM44.132 6.69907V32.8042H35.4839V13.5584H29.5694V23.1864H20.4311V6.69907H44.132ZM50 38.4907V0.977646H14.5163V13.5584H0V51.0918H35.4839V38.4907H50Z'
                        fill='url(#paint0_linear_473_38)'
                        fill-opacity='0.8'
                    />
                    <defs>
                        <linearGradient
                            id='paint0_linear_473_38'
                            x1='2.38651e-07'
                            y1='26.0348'
                            x2='54.6512'
                            y2='26.0348'
                            gradientUnits='userSpaceOnUse'>
                            <stop stop-color='#0F497E' />
                            <stop offset='1' stop-color='#53CAF5' />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='horizontal right-side'></div>
        </div>
    );
}

export default Spacer;