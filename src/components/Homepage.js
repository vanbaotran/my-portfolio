import React from 'react';
import Portfolio from './Portfolio'

const Homepage = () => {
    return (
        <main className='homepage'>
        <div className='header'>
            <div className='text'>
            <p>Hello, I'm</p>
            <h2>Bao-Tran Van</h2>
            <p>and I am a Web Developer</p>
            </div>
        </div>
        <div className='feature'>
        <div className='text-span'>
        <span>Featured</span>
        <span className='text-bold'> Portfolio</span>
        </div>
        </div>
        <Portfolio />
        </main>
    )
}

export default Homepage