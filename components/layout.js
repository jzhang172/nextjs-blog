import styles from './layout.module.css'
import Image from 'next/image'
import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Navbarmain from './navbar'

const name = 'Jason'
export const siteTitle = 'Level Up'

export default function Layout({ children, home }) {
  return (
    <div>
      <Navbarmain></Navbarmain>

      <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header className={styles.header}>
          {/* {home ? (
            <>
              <Image
                priority
                src="/images/aaaaa.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
            </>
          ) : null



          } */}
        </header>
        
        <main>{children}</main>
     
     
      <div className={home ? (styles.container) : (styles.blogContainer)}>



        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>

    </div>

  )
}