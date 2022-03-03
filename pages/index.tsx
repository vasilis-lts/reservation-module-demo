import { Auth } from 'aws-amplify'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useAuthState from '../hooks/useAuthState'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const router = useRouter();
  const { AuthStatus, setAuthStatus } = useAuthState();

  // useEffect(() => {
  //   router.push('/reservation?locationid=1')
  // }, []);

  useEffect(() => {
    // start on component mount
    // getUsers()
    signIn();

    return () => {
      // runs when component unmount
    }
  }, []);

  // function getUsers() {
  //   const users = [{id:"1",Name:"Vasilis"}];
  //   setUsers(users);
  // }

  useEffect(() => {
    if (AuthStatus === 'checkingAuthStatus') {
      console.log('checkingAuthStatus')
    }
    if (AuthStatus === 'loggedIn') {
      console.log('Logged in')
    }
  }, [AuthStatus]);

  async function signIn() {
    try {
      const user = await Auth.signIn('stamatis.voutsadakis@architechts.gr', 'Stamatis1!');
      // console.log(user);

      if (user) {
        setTimeout(() => {
          setAuthStatus('loggedIn');
        }, 3000);
      }


      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        const newPW = await Auth.completeNewPassword(user, 'Stamatis1!', [])
        console.log(newPW);
      } else {
        // setAuthStatus('loggedIn');
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (AuthStatus === 'checkingAuthStatus') return (
    <div>Checking Authentication...</div>
  )

  return (
    <div id="mainContainer" className={styles.container}>
      <Head>
        <title>Reservation module</title>
        <meta name="description" content="Reservation module" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <Image src="/assets/images/camping1.jpg" alt="Camping1" width={612} height={408} /> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}

export default Home
