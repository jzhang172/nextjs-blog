import Head from 'next/head'
import Link from 'next/link'


import { Container, Row, Col, Button, Card, CardGroup } from 'react-bootstrap'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import styles from '../styles/index.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import Navbarmain from '../components/navbar'
import SubscribeBanner from '../components/subscribeBanner'
import SocialSideBar from '../components/socialSideBar'
import React, { useEffect, useRef, forwardRef } from 'react'


export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}





export default function Home({ allPostsData }) {



  //See if post has a mainArticle key
  const mainArticle = allPostsData.find(o => (o.mainArticle === 'Yes'));
  //See if post has a secondFeature key
  const secondFeature = allPostsData.find(o => (o.secondFeature === 'Yes'));


  const pull_data = (data) => {

    const navHeight = data;
     console.log(navHeight); 

   }




  return (

    
    <div>

      <Layout home giveNavHeight={pull_data}>

        <Head>
          <title>{siteTitle}</title>
        </Head>

        {/* <Container>
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
        </Container> */}
        <SocialSideBar>

        </SocialSideBar>
        {/* <Container className={styles.heroArticle} style={{ height: "calc(100vh - " + navHeight + "px)"}}> */}
        <Container className={styles.heroArticle}>
          <Row>
            <Col xs={6} className={styles.heroLeft}>
              <a href={`/posts/${mainArticle.id}`} className={utilStyles["noLinkStyle"] + " " + utilStyles["noLinkHover"] + " " + utilStyles["linkAnimation"]}>

                <img src={mainArticle.firstImage} />

              </a>
            </Col>
            <Col xs={6} className={styles.heroRight}>

              <div className={styles.heroRightWrapper}>
                <h5>{mainArticle.category}</h5>
                <h3>{mainArticle.title}</h3>
                <h4>{mainArticle.subtitle}</h4>
                <Button> <a href={`/posts/${mainArticle.id}`} className={styles.mainButton}>Read Story</a></Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className={styles.secondFeatureWrapper}>
          <Row>

            {allPostsData.map(({ id, date, title, firstImage, category, subtitle, secondFeature }) => (

              secondFeature ? (
                <Col sm={4}>
                  <a href={`/posts/${id}`} key={id} className={utilStyles["noLinkStyle"] + " " + utilStyles["cardAnimation"]}>
                    <Card className={styles.secondFeatureCards}>
                      <Card.Img src={firstImage} className={styles.cardImage} />
                      <Card.Body className={styles.cardBody}>
                        <h5 className={styles.categorySecond}>{category}</h5>
                        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                        <Card.Text>
                          {subtitle}
                        </Card.Text>
                      </Card.Body>

                    </Card>
                  </a>
                </Col>
              ) : null

            ))}

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
                       

                      </div>
                    )



                ))}

              </div>





            </Col>
            <Col xs={2}>
            </Col>
            <Col xs= {4}>
<div className={styles.sponsorTitle}>
<h2>Where to eat</h2>
</div>
<CardGroup className={styles.card}>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  </CardGroup>
            </Col>
          </Row>


        </Container>



        <SubscribeBanner>

        </SubscribeBanner>




      </Layout>

    </div>
  )
}

