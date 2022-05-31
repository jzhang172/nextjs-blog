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

            {/* {allPostsData.map(({ id, date, title, firstImage, category, subtitle, secondFeature }) => (

              secondFeature ? (
                <Col sm={6}>
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

            ))} */}

<Col sm={2}></Col>
            {allPostsData.map(({ id, date, title, firstImage, category, subtitle, secondFeatureFirst }) => (

              secondFeatureFirst ? (
                <Col sm={3}>
                  <a href={`/posts/${id}`} key={id} className={utilStyles["noLinkStyle"] + " " + utilStyles["cardAnimation"]}>
                    <Card className={styles.secondFeatureCardsFirst}>
                      <div className={styles.secondFeatureCardsTop}>
                      <Card.Img src={firstImage} className={styles.cardImageFirst} />
                      </div>
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
{/* <Col sm={1}></Col> */}
            <Col sm={3}>
              <div className={styles.featureTitleWrap}>
              <h2 className={styles.featureTitle}>Feature</h2>
              </div>
              <Row>
                {allPostsData.map(({ id, date, title, firstImage, category, subtitle, secondFeatureSecond }) => (

                  secondFeatureSecond ? (

                    <a href={`/posts/${id}`} key={id} className={utilStyles["noLinkStyle"] + " " + utilStyles["cardAnimation"]}>
                      <Card className={styles.secondFeatureCardsSecond}>
                      <div className={styles.secondFeatureCardsTop}>
                        <Card.Img src={firstImage} className={styles.cardImage} />
                        </div>
                        <Card.Body className={styles.cardBody}>
                          <h5 className={styles.categorySecond}>{category}</h5>
                          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                          <Card.Text>
                            {subtitle}
                          </Card.Text>
                        </Card.Body>

                      </Card>
                    </a>



                  ) : null



                ))}

              </Row>
              <Row>
                {allPostsData.map(({ id, date, title, firstImage, category, subtitle, secondFeatureThird }) => (
                  secondFeatureThird ? (

                    <a href={`/posts/${id}`} key={id} className={utilStyles["noLinkStyle"] + " " + utilStyles["cardAnimation"]}>
                      <Card className={styles.secondFeatureCardsThird}>
                      <div className={styles.secondFeatureCardsTop}>
                        <Card.Img src={firstImage} className={styles.cardImage} />
                        </div>
                        <Card.Body className={styles.cardBody}>
                          <h5 className={styles.categorySecond}>{category}</h5>
                          <Card.Title className={styles.cardTitle}>{title}</Card.Title>
                          <Card.Text>
                            {subtitle}
                          </Card.Text>
                        </Card.Body>

                      </Card>
                    </a>



                  ) : null

                ))}

              </Row>
            </Col>

            <Col sm={3}></Col>

          </Row>
        </Container>
<Container>
  <div className={styles.lookbookWrapper}>
    <div className={styles.lookbookName}>
      <div className={styles.cover}></div>
    <h2>Lookbook</h2>
    </div>
  </div>

</Container>
        <Container>
          <Row>
            <Col xs={7}>
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
            <Col xs={3}>
              <div className={styles.sponsorTitle}>
                <h2>Sponsor</h2>
              </div>
              <CardGroup className={styles.card}>
                <Card className={styles.cardBorder}>
                  <Card.Img variant="top" src="/images/chair.jpg" />
                  <Card.Body>
                    <Card.Title>Ikea</Card.Title>
                    <Card.Text>
                      Shop here for the latest deal.
      </Card.Text>
                  </Card.Body>

                </Card>
                <Card>
                  <Card.Img variant="top" src="/images/aaaaa.jpg" />
                  <Card.Body>
                    <Card.Title>Melo's Discount</Card.Title>
                    <Card.Text>
                      Up to 80% off select Furniture
      </Card.Text>
                  </Card.Body>

                </Card>
              </CardGroup>
            </Col>
          </Row>


        </Container>



        <SubscribeBanner>

        </SubscribeBanner>

        <Container>
          <div className="footer-left">

          </div>
          <div className="footer-right">

          </div>
        </Container>


      </Layout>

    </div>
  )
}

