import React from 'react';

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {["home", "features", "recent", "editor", "list", "calendar", "emoji", "view", "image-editor", "dark-mode"].map((item, index) => (
                <a key={`a-${index}`} className="app__navigation-dot" href={`#${item}`} style={active === item ? { backgroundColor: '#313bac' } : {}} ></a>
            ))}
        </div>
    );
}

export default NavigationDots;
