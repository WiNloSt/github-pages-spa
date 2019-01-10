import React, { Component } from 'react'
import { Router, Link } from '@reach/router'
import styled from '@emotion/styled/macro'
import css from '@emotion/css/macro'
import { Global } from '@emotion/core'
import { Home } from './components/Home'
import { About } from './components/About'
import { NotFound } from './components/NotFound'

const Nav = styled.nav`
  > ul {
    list-style: none;
    display: flex;

    > li ~ li {
      margin-left: 10px;
    }
  }

  a {
    text-decoration: none;

    &:visited {
      color: inherit;
    }
  }
`

const MainContainer = styled.section`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

class App extends Component {
  render() {
    return (
      <>
        <Global
          styles={css`
            html,
            body {
              color: #444;
            }
          `}
        />
        <div className="App">
          <Nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
            </ul>
          </Nav>
          <MainContainer>
            <Router>
              <Home path="/" />
              <About path="about/*" />
              <NotFound default />
            </Router>
          </MainContainer>
        </div>
      </>
    )
  }
}

export default App
