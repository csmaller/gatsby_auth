import React from "react"
import { css } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography";
import NavBar from "./nav-bar";

export default function Layout({ children }) {

    return (
        <div
            css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
        >
            <NavBar />
            {children}
        </div>
    )

}