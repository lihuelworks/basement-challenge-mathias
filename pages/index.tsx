import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.pageContainer}>
            <Head>
                <title>Make a BaseGit account</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href='https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap' rel="stylesheet"></link>
            </Head>

            <main className={styles.gridContainer}>
                <div className={styles.signupContainer}>
                    <div>
                            <img src="/basement-icon.svg"   alt="basegit icon" />
                            <h1 className={styles.headline}>Sign up to BaseGit</h1>
                            <p>BaseGit is the best way to store information.</p>
                        </div>
                        <div>
                            <p>Continue with a provider</p>
                            <button type="submit" name="facebook" value="facebook"></button>
                            <button type="submit" name="twitter" value="twitter"></button>
                            <button type="submit" name="github" value="github"></button>
                        </div>
                        <div>
                            <form className={styles.formContainer}>
                                <label htmlFor="name">Email address</label>
                                <input id="name" type="text" autoComplete="name" required />
                                <label htmlFor="psw">Password</label>
                                <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
                                <label htmlFor="psw-repeat">Repeat Password</label>
                                <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
                                <button type="submit">Sign up</button>
                            </form>
                        </div>
                </div>
                <div className={styles.spaceshipContainer}>
                    <img src="spaceship-cover.png" alt="an image of a spaceship"></img>
                </div>
            </main>
        </div>
    );
}
