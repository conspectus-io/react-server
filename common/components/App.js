import React from 'react'
import Helmet from 'react-helmet'
import Nav from './Nav'
import { StyleSheet, css } from 'aphrodite'

const App = ({ children }) => (
  <div className={css(styles.root)}>
    <Helmet title='React Production Starter' titleTemplate='%s - React Production Starter' />
    <h1 className={css(styles.title)}>Live Server Testing</h1>
    <Nav />
    {children}
    <footer className={css(styles.footer)}>
      React Production Server Testing on Digital Ocean. <br>Domain Name Servers at AWSRoute53.</br>
    </footer>
  </div>
)

const styles = StyleSheet.create({
  root: {
    maxWidth: 1280,
    color: '#000',
    margin: '2rem auto',
    padding: '0 1rem'
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontWeight: 'bold',
    fontSize: 56
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7'
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none'
  }
})

export default App
