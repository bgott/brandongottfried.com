import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import icon_web from '../assets/images/icon_web.svg'
import icon_mail from '../assets/images/icon_mail.svg'
import icon_phone from '../assets/images/icon_phone.svg'
import icon_web_dark from '../assets/images/icon_web_dark.svg'
import icon_mail_dark from '../assets/images/icon_mail_dark.svg'
import icon_phone_dark from '../assets/images/icon_phone_dark.svg'

const ContactBar = (props) => (
    <section id={props.location} className="contact-bar">
        <div className="grid-wrapper">
            <div className="col-4">
                <img src={props.location === "upper" ? icon_web : icon_web_dark} alt="" /><p>brandongottfried.com</p>
            </div>
            <div className="col-4">
                <img src={props.location === "upper" ? icon_mail: icon_mail_dark} alt="" /><p>brandon.jo.gottfried@gmail.com</p>
            </div>
            <div className="col-4">
                <img src={props.location === "upper" ? icon_phone : icon_phone_dark} alt="" /><p>(919) 459-7870</p>
            </div>
        </div>
    </section>
)

export default ContactBar
