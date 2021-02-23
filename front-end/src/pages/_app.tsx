// _app carrega sempre que página for atualizada 


import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
