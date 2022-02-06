import Navigation from '../src/Components/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
