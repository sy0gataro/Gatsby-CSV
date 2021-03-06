import React from "react"

import Header from "../header"
import "../layout.css"

const Layout = props => {
  const {
    pageContext: { Age, Country, FirstName, LastName },
  } = props

  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          <h1>
            {FirstName} {LastName}
          </h1>
          <p>Age: {Age}</p>
          <p>Location: {Country}</p>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
