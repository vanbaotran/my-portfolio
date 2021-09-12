import React from 'react'

const Contact = () => {
    return (
        <section className='contact'>
          <h1>CONTACTS </h1>
        <div className='contact-info'>
            <div className='avatar'>
            <img  src='https://res.cloudinary.com/vanbaotran/image/upload/v1631476768/IMG_3253_3_nwlwqd.png' alt='avatar' />
            </div>
            <div className='list'>
            <div className='line'>            
                <img src='/images/phone_black_24dp 1.png' alt='phone'/>
                <p>+33 7 81 89 46 49</p>
            </div>
            <div className='line'>    
            <img src='/images/email_black_24dp 1.png' alt='mail'/>
            <p>vanbaotran@icloud.com || vanbaotran201194@gmail.com  </p>
            </div>
            <div className='line'>  
            <img src='/images/image 1.png' alt='git'/>
            <p>https://github.com/vanbaotran</p>
            </div>
            <div className='line'>  
            <img src='/images/image 2.png' alt='linkedin'/>
            <p>https://www.linkedin.com/in/vanbaotran</p> 
            </div>
            <a href="mailto:vanbaotran201194@gmail.com"><button>SEND ME AN EMAIL</button></a>
            </div>
            
        </div>
        
        </section>
    )
}
export default Contact