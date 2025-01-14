import React from 'react'
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import contact from './Images/contact.jpeg';
import Footer from './Footer';
const Contact = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <h1 className=" text-center text-secondary">Get In Touch</h1>
            </div>
            <div className="container-fluid row">
                <div className="col mt-5">
                    <h2 className='text-white'>Contact Me....</h2>
                    <div className="gap-4 col mt-5 d-flex justify-content-center align-items-center">
                        <div>
                        <Button href='mailto:Gauravpawse664@gmail.com' variant="outlined" startIcon={<EmailIcon />}>
                            Email
                        </Button>
                        </div>
                        <div>
                        <Button href='https://wa.me/qr/ECVG62J7NLMXI1' variant="outlined" target='_blank' startIcon={<WhatsAppIcon />}>
                            WhatsApp
                        </Button>
                        </div>
                        <div>
                        <Button href='https://www.linkedin.com/in/gaurav-pawse-b612b326b/' target='_blank' variant="outlined" startIcon={<LinkedInIcon />}>
                            LinkedIn
                        </Button>
                        </div>
                        <div>
                        <Button href='https://www.instagram.com/gaurav_pawse123?igsh=a3lnODlvc2JpbWV2' target='_blank' variant="outlined" startIcon={<InstagramIcon />}>
                            Instagram
                        </Button>
                        </div>
                    </div>
                </div>
                <div className="col justify-content-center m-auto mt-4">
                    <img src={contact} alt="contact" width="100%" height="250px"/>
                </div>
                <div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact
