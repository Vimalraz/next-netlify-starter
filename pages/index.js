import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Vimalraj Murugesan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my page!" />
        <p className="description">
          Currently building the site. This site will track the progress of my coding journey and maybe a blog.
        </p>
      </main>

      <Footer />
    </div>
  )
}
