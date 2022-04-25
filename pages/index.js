import Head from 'next/head'
import Link from 'next/link'


import { Container, Row, Col, Button } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/index.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Navbarmain from '../components/navbar'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {




    console.log(allPostsData);
   const found = allPostsData.find(o => (o.mainArticle === 'Yes' )

   )
let foundone=found;
console.log(foundone);



  return (
    <div>

      <Layout home>

        <Head>
          <title>{siteTitle}</title>
        </Head>

        <Container>
          <Row>
            <Col>
              <div className={styles.jumbotron}>
                Main
    </div>
              <div className={styles.jumboText}>
                <h3> </h3>
              </div>

            </Col>
          </Row>
        </Container>



        <section className={utilStyles.headingMd}>
          <p>Hi, I'm Jason, the current Pokemon Champion</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
      </p>
        </section>

        {/* {allPostsData.find(element=> element ==="ev")

return (<div>hi</div>)
} */}


        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>

            {allPostsData.map(({ id, date, title }) => (

              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>


            ))}
          </ul>
        </section>





      </Layout>

    </div>
  )
}

