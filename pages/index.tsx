import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Make a BaseGit account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src='..\..\assets\basement-icon.svg' alt="basegit icon"></img>
        <h1>
          Sign up to BaseGit
        </h1>
        <p>
          BaseGit is the best way to store information.
        </p>
        <p>
          Continue with a provider
        </p>

        
      </main>
    </div>
  )
}
