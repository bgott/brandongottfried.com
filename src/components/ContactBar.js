import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import icon_web from '../assets/images/icon_web.svg'
import icon_mail from '../assets/images/icon_mail.svg'
import icon_phone from '../assets/images/icon_phone.svg'

const ContactBar = (props) => (
    <section id={props.location} className="contact-bar">
        <div className="grid-wrapper">
            <div className="col-4">
                <svg>
                    <use xlinkHref={`#${icon_web.id}`} />
                </svg>
                <p>brandongottfried.com</p>
            </div>
            <div className="col-4">
                <img src={icon_mail} alt="" /><p>brandon.jo.gottfried@gmail.com</p>
            </div>
            <div className="col-4">
                <img src={icon_phone} alt="" /><p>(919) 459-7870</p>
            </div>
        </div>
    </section>
)

export default ContactBar
