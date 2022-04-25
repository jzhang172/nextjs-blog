import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { Container, Row, Col, Button } from 'react-bootstrap'
import blogposts from '../../pages/posts/blogposts.module.css'
import Socialbar from '../../components/socialBar'
import ArticleStyle1 from '../../components/articleStyle1'
import ArticleStyle2 from '../../components/articleStyle2'
import Link from 'next/link'

//For ScrollMagic
import { Controller, Scene } from 'react-scrollmagic';
import styled from '../../pages/posts/blogposts.module.css'
import React from 'react';







export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function hi() {
  alert('hey');
}



export default function Post({ postData }) {

  return (
    <div>

      { postData.themeOne ? (

        <ArticleStyle2 props={postData}></ArticleStyle2>


      ) : (


          <ArticleStyle1>

            <Container className={blogposts.blogContainer}>

              <Row>
                <Col xs={5} className={blogposts.leftSide}>

                  <Head>
                    <title>{postData.title}</title>
                  </Head>

                  <article>
                    <div className={blogposts.titleBlock}>
                      <div className={blogposts.image}>

                      </div>
                      <div className={blogposts.title}>
                        <h1 className={utilStyles.blogTitle1}>{postData.title}</h1>
                        <h2 className={utilStyles.blogsSubtitle1}>{postData.subtitle}</h2>
                        <div className={utilStyles.dateText}>
                          <Date dateString={postData.date} />
                        </div>
                      </div>

                    </div>
                    <div className={blogposts.imageDescDiv}>
                      <span className={blogposts.imageDesc}>{postData.image}</span>
                      <hr className={blogposts.hrtitle} />
                    </div>
                    <div className={blogposts.blogNavbar}>
                      <Socialbar></Socialbar>
                    </div>










                    <div className={blogposts.mainArticle} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />

                  </article>

                  {postData.related ? (
                    <div className={blogposts.relatedDiv}>
                      <h2>Related</h2>
                      {postData.text1 ? (

                        <p> <a href={postData.link1} target="_blank"> {postData.text1} </a></p>
                      ) : null
                      }
                      {postData.text2 ? (

                        <p> <a href={postData.link2} target="_blank">{postData.text2} </a></p>
                      ) : null
                      }
                      {postData.text3 ? (

                        <p> <a href={postData.link3} target="_blank">{postData.text3} </a></p>
                      ) : null
                      }

                    </div>) : null
                  }
                  <div className={blogposts.copyright}>
                    <span>© 2022 Jason Media, Inc. All rights reserved.</span>
                  </div>
                </Col>
                <Col className={blogposts.rightSide}>

                  <div className={blogposts.rightPic}></div>
                </Col>



              </Row>
            </Container>
          </ArticleStyle1>
        )}
    </div>
  )

}