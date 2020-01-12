import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import PatientLink from '../pages/patient-link'

import pic01 from '../assets/images/img_01.jpg'
import pic02 from '../assets/images/img_01.jpg'
import pic03 from '../assets/images/img_01.jpg'
import pic04 from '../assets/images/img_01.jpg'
import pic05 from '../assets/images/img_01.jpg'
import pic06 from '../assets/images/img_01.jpg'

class HomeIndex extends React.Component {
    render() {
        return (
            <PatientLink />
        )
    }
}

export default HomeIndex
