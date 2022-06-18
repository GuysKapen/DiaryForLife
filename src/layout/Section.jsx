import React, { Component } from 'react';
import { NavigationDots, SocialMedia } from "../components"

const Section = (Element, idName, className) => {
    return class WithData extends Component {

        render() {
            console.log('this.props', this.props);
            return (
                <div id={idName} className={`app__container ${className}`}>
                    <SocialMedia />
                    <div className='app__wrapper app__flex'>
                        <Element {...this.props} />

                        <div className='copyright'>
                            <p className='p-text'>@2022 Guys</p>
                            <p className='p-text'>All rights reserved</p>
                        </div>

                    </div>
                    <NavigationDots active={idName} />
                </div>)
        }

    }
}

export default Section;
