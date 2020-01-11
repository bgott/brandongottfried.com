import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p>Sorry, the page you were looking for could not be found. The page may have moved or it no longer exists.</p>
                <p>Try checking the URL or return home.</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
