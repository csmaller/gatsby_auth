import React from "react"
import { Link, navigate,useStaticQuery, graphql  } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth";
import { css } from "@emotion/core";
import { rhythm } from "../utils/typography";

export default function NavBar() {

    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )

    let greetingMessage = ""
    if (isLoggedIn()) {
        greetingMessage = `Hello ${getUser().name}`
    } else {
        greetingMessage = "You are not logged in"
    }
    return (
        <div
            style={{
                display: "flex",
                flex: "1",
                justifyContent: "space-between",
                borderBottom: "1px solid #d1c1e0",
            }}>
            <span>{greetingMessage}</span>
            <nav>
                <Link to="/">{data.site.siteMetadata.title}</Link>
                {` | `}
                <Link to="/app/profile">Profile</Link>
                {` | `}
                <Link to={`/pandas`}>Pandas</Link>
                {` | `}
                <Link to={`/about/`}>About</Link>

                {isLoggedIn() ? (
                    <>
                   <span> | </span> 
                    <a href="/"
                        onClick={event => {
                            event.preventDefault()
                            logout(() => navigate(`/app/login`))
                        }}
                    >
                        Logout
                    </a>
                    </>
                ) : null}
            </nav>
        </div>
    )
}