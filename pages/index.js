import Head from 'next/head'
import Link from 'next/link'


import { Container, Row, Col, Button } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/index.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Navbarmain from '../components/navbar'
import SubscribeBanner from '../components/subscribeBanner'



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
              <a href={`/posts/${mainArticle.id}`} className={utilStyles["noLinkStyle"] + " " + utilStyles["noLinkHover"]}>
                <div className={styles.jumbotron}>

                  <img src={mainArticle.firstImage} />
                </div>
                <div className={styles.jumboText}>
                  <h3> {mainArticle.title}</h3>
                  <h4> {mainArticle.subtitle}</h4>
                </div>
              </a>
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

                {allPostsData.map(({ id, date, title, firstImage, category, big }) => (


                  big ? (
                    <div key={id} style={{ background: "url(" + firstImage + ")" }} className={styles.bigLatest} >
<div className={styles.bigOverlay}></div>
                      <a href={`/posts/${id}`} key={id} className={styles["latestArticleBlock"] + " " + utilStyles["noLinkStyle"]}>
                        
                        <div className={styles.blockInfo}>
                          <small>{category}</small>
                          <h2>{title}</h2>
                          <small className={utilStyles.lightText}>
                            <Date dateString={date} />
                          </small>

                        </div>
                      </a>
                      <br />

                    </div>


                  ) : (


                      <div key={id}>

                        <a href={`/posts/${id}`} key={id} className={styles["latestArticleBlock"] + " " + utilStyles["noLinkStyle"]}>
                          <img src={firstImage} />
                          <div className={styles.blockInfo}>
                            <small>{category}</small>
                            <h2>{title}</h2>
                            <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                            </small>

                          </div>
                        </a>
                        <br />

                      </div>
                    )



                ))}

              </div>





            </Col>
          </Row>


        </Container>
        <SubscribeBanner>

        </SubscribeBanner>







      </Layout>

    </div>
  )
}

