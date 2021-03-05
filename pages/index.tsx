import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Make a BaseGit account</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section>
                    <img src="/basement-icon.svg" alt="basegit icon" />
                    <h1>Sign up to BaseGit</h1>
                    <p>BaseGit is the best way to store information.</p>
                </section>

                <section>
                    <p>Continue with a provider</p>
                    <button type="submit" name="facebook" value="facebook"></button>
                    <button type="submit" name="twitter" value="twitter"></button>
                    <button type="submit" name="github" value="github"></button>
                </section>
                <section>
                    <form>
                        <label htmlFor="name">Email address</label>
                        <input id="name" type="text" autoComplete="name" required />
                        <label htmlFor="psw">Password</label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
                        <label htmlFor="psw-repeat">Repeat Password</label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
                        <button type="submit">Sign up</button>
                    </form>
                </section>
            </main>
            {/* <img src="spaceship-cover.png"></img> */}
        </div>
    );
}
