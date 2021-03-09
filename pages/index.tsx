import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
    return (
        <div>
   
            <Head>
                <title>Make a BaseGit account</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;800' rel="stylesheet"></link>
            </Head>

            <main className={styles.pageContainer}>
                <div className={styles.signupContainer}>
                    <form className={styles.formContainer}>
                        <img src="/basement-icon.svg"   alt="basegit icon" />
                        <section className={styles.header}>
                            <h1 className={styles.headline}>Sign up to BaseGit</h1>
                            <p className={styles.subHeadline}>BaseGit is the best way to store information.</p>
                        </section>
                        <p className={styles.providerLine}> Continue with a provider</p>
                        <section className={styles.buttonsContainer}>
                            <button className={styles.facebookButton} type="submit" name="facebook" value="facebook">
                                <FontAwesomeIcon icon={faFacebook} style={{ color: '#6B7280', fontSize: '20px'}}/>
                            </button>
                            <button className={styles.twitterButton} type="submit" name="twitter" value="twitter">
                                <FontAwesomeIcon icon={faTwitter} style={{ color: '#6B7280', fontSize: '20px'}}/>
                            </button>
                            <button className={styles.githubButton} type="submit" name="github" value="github">
                                <FontAwesomeIcon icon={faGithub} style={{ color: '#6B7280', fontSize: '20px'}}/>
                            </button>
                        </section>
                        <p className={styles.workEmailLabel}>
                            <span>
                            Or with your work email
                            </span>
                        </p>
                        <section>
                        <div className={`${styles['input-container']} ${styles.email}`}>
                            <label htmlFor="name">Email address</label>
                            <input id="name" type="email" required />
                        </div>
                        <div className={`${styles['input-container']} ${styles.password}`}>
                            <label htmlFor="psw">Password</label>
                            <input type="password" name="psw" required></input>

                        </div>
                        <div className={`${styles['input-container']} $${styles.password}`}>
                                <label htmlFor="psw-repeat">Repeat Password</label>
                                <input type="password" name="psw-repeat" required></input>
                            </div>
                        <button className={styles.signupButton} type="submit">
                            Sign up
                        </button>
                        </section>
                    </form>    
                </div>
                <div className={styles.spaceshipContainer}>
                    <img className={styles.spaceshipImg} src="spaceship-cover.png" alt="an image of a spaceship"></img>
                </div>
            </main>
        </div>
    );
}
