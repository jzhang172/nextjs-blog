import { Container, Row, Col, Button } from 'react-bootstrap'
import blogposts from '../pages/posts/blogposts.module.css'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Socialbar from '../components/socialBar'
import Date from '../components/date'

export default function ArticleStyle2({ children, props }) {

    return (
 
<div>
<Container className={blogposts.blogContainer}>
            <article>
              <div className={blogposts.titleBlock2}>
                <div className={blogposts.logo}>
                  <Link href="/">
                    <a>Logo</a>
                  </Link>
                  <p>
                    Washington D.C.
                  </p>
                </div>
                <div className={blogposts.image} style={{ background: "url(" + props.firstImage + ")" }}>
                </div>


              </div>
              <div className={blogposts.imageDescDiv}>
                <span className={blogposts.imageDesc2}>{props.image}</span>
                <hr className={blogposts.hrtitle2} />
              </div>
              <Row>
                <Col xs={2}></Col>
                <Col xs={6}>
                  <div className={blogposts.title2}>
                    <div className={blogposts.category}><span>{props.category}</span></div>
                    <h1 className={utilStyles.blogTitle2}>{props.title}</h1>
                    <h2 className={utilStyles.blogsSubtitle2}>{props.subtitle}</h2>
                    <div className={utilStyles.dateText}>
                      <Date dateString={props.date} />
                    </div>
                  </div>


                  <div className={blogposts.blogNavbar}>
                    <Socialbar></Socialbar>
                  </div>









                  <div className={blogposts.mainArticle2} dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
                </Col>
              </Row>

            </article>
            <div className={blogposts.lastImage} style={{ background: "url(" + props.lastImage + ")" }}>

            </div>
            {props.related ? (
              <div className={blogposts["relatedDiv"] + " " + blogposts["relatedDiv2"]}>
                <Row>
                  <Col xs={4}>

                  </Col>
                  <Col xs={4}>
                    <h2>Related</h2>
                    {props.text1 ? (

                      <p> <a href={props.link1} target="_blank"> {props.text1} </a></p>
                    ) : null
                    }
                    {props.text2 ? (

                      <p> <a href={props.link2} target="_blank">{props.text2} </a></p>
                    ) : null
                    }
                    {props.text3 ? (

                      <p> <a href={props.link3} target="_blank">{props.text3} </a></p>
                    ) : null
                    }


                  </Col>
                </Row>

              </div>) : null
            }
            <div className={blogposts.subscribeContainer}>
              <div className={blogposts.subscribe}>
                <h2>Logo </h2>
                <h3> Sign up for our newsletter.</h3>
                <label for="field_email">
                  <span>Email <strong>(required)</strong></span>
                </label>
                <div>
                  <input id="field_email" name="email" type="email" required placeholder></input>
                </div>
                <div className={blogposts.privacy}>
                  <p>By signing up, you agree to our Privacy Notice and European users agree to the data transfer policy.</p>
                </div>
                <div className={blogposts.buttonDiv}>
                  <Button variant="primary" type="submit">SUBSCRIBE</Button>

                </div>
              </div>
              <div className={blogposts.copyright}>
                <span>© 2022 Jason Media, Inc. All rights reserved.</span>
              </div>
            </div>
          </Container>


</div>




    )
}