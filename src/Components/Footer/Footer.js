import React from 'react'
import { CFooter, CLink } from '@coreui/react'




const Footer = () => {
    return (
        <CFooter>
            <div className='footer-wrap'>
                <div className='footer-item'>
                    <div className='footer-text'><i class="fa-brands fa-github fa-xl icon-color"></i></div>
                    <CLink href="https://github.com/JaskaranSingh-01/NewsWave-news_website.git" target="_blank">Github</CLink>
                </div>
                <div className='footer-item'>
                    <div><i class="fa-brands fa-x-twitter fa-xl icon-color"></i></div>
                    <CLink href="https://twitter.com/J0EEY" target="_blank">Twitter</CLink>
                </div>
            </div>
            <div className='footer-item'>
                
                <CLink href="https://docs.google.com/document/d/1PF1vgF6mgCPfKiQ9a0yKNsK6ayqOmfXLNqPzqADRITk/edit" target="_blank"> NewsWave Assignment</CLink>
            </div>
        </CFooter>
    )
}

export default Footer