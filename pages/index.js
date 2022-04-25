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




  const mainArticle = allPostsData.find(o => (o.mainArticle === 'Yes'));



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
                <img src={mainArticle.firstImage} />
              </div>
              <div className={styles.jumboText}>
                <h3> {mainArticle.title}</h3>
              </div>

            </Col>
          </Row>
        </Container>



        <Container>
          <Row>
            <Col xs={6}>
              <div className={styles.latest}>
                <h2>The Latest</h2>
              </div>
              <div className={styles.latestArticle}>

                {allPostsData.map(({ id, date, title, firstImage }) => (
                  <div>

                    <a href={`/posts/${id}`} key={id} className={styles.latestArticleBlock}>
                      <img src={firstImage} />
                      <div className={styles.blockInfo}>
                        <h2>{title}</h2>
                        <small className={utilStyles.lightText}>
                          <Date dateString={date} />
                        </small>
                      </div>
                    </a>
                    <br />

                  </div>


                ))}

              </div>





            </Col>
          </Row>


        </Container>



        {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
        </section> */}





      </Layout>

    </div>
  )
}

