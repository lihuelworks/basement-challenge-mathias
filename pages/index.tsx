import { useState } from 'react';
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.css';

export default function Home() {
  interface Values {
    email: string;
    password: string;
    passwordConfirm: string;
  }

  const initialValues: Values = {
    email: '',
    password: '',
    passwordConfirm: '',
  };
  

  function Form() {
    const [values, setValues] = useState<Values>(initialValues);
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      setValues((prev) => ({ ...prev, [target.name]: target.value }));
    };
  }

  return (
    <div>
      <Head>
        <title>Make a BaseGit account</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.pageContainer}>
        <div className={styles.signupContainer}>
        <section className={styles.formContainer}>
          <img src="/basement-icon.svg" alt="basegit icon" />
          <section className={styles.header}>
            <h1 className={styles.headline}>Sign up to BaseGit</h1>
            <p className={styles.subHeadline}>BaseGit is the best way to store information.</p>
          </section>
          <p className={styles.providerLine}> Continue with a provider</p>
          <section className={styles.buttonsContainer}>
            <button className={styles.facebookButton} type="submit" name="facebook" value="facebook">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#6B7280', fontSize: '20px' }} />
            </button>
            <button className={styles.twitterButton} type="submit" name="twitter" value="twitter">
              <FontAwesomeIcon icon={faTwitter} style={{ color: '#6B7280', fontSize: '20px' }} />
            </button>
            <button className={styles.githubButton} type="submit" name="github" value="github">
              <FontAwesomeIcon icon={faGithub} style={{ color: '#6B7280', fontSize: '20px' }} />
            </button>
          </section>
          <p className={styles.workEmailLabel}>
            <span>
              Or with your work email
              </span>
          </p>
            <form>
              <div className={`${styles['input-container']} ${styles.email}`}>
                <label htmlFor="email">Email address</label>
                <input
                  id="name"
                  type="email"
                  maxLength={64}
                  required
                />
              </div>
              <div className={`${styles['input-container']} ${styles.password}`}>
                <label htmlFor="psw">Password</label>
                <input type="password" name="psw" required />

              </div>
              <div className={`${styles['input-container']} $${styles.password}`}>
                <label htmlFor="passwordConfirm">Repeat Password</label>
                <input
                  type="password"
                  name="passwordConfirm"
                  required />
              </div>
              <button className={styles.signupButton} type="submit">
                Sign up
                </button>
            </form>
          </section>
        </div>
          <div className={styles.spaceshipContainer}>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
            <div className={styles.clouds}></div>
            <div className={styles.spaceshipWrapper}>
              <img className={`${styles.spaceship} ${styles.floating}`}
            src="https://imgur.com/ezirliB.png" alt="an image of a spaceship" />
            </div>
        </div>
      </main>
    </div>
  );
}
