import { Container, Row, Col, Button } from 'react-bootstrap'
import blogposts from '../pages/posts/blogposts.module.css'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
import Socialbar from '../components/socialBar'
import Navbarmain from './navbar'
import Head from 'next/head'
import Date from '../components/date'


export default function ArticleStyle1({ children, props }) {
    return (
 
<div>
<Navbarmain></Navbarmain>

<Container className={blogposts.blogContainer}>

<Row>
  <Col xs={5} className={blogposts.leftSide}>

    <Head>
      <title>{props.title}</title>
    </Head>

    <article>
      <div className={blogposts.titleBlock}>
        <div className={blogposts.image}>

        </div>
        <div className={blogposts.title}>
          <h1 className={utilStyles.blogTitle1}>{props.title}</h1>
          <h2 className={utilStyles.blogsSubtitle1}>{props.subtitle}</h2>
          <div className={utilStyles.dateText}>
            <Date dateString={props.date} />
          </div>
        </div>

      </div>
      <div className={blogposts.imageDescDiv}>
        <span className={blogposts.imageDesc}>{props.image}</span>
        <hr className={blogposts.hrtitle} />
      </div>
      <div className={blogposts.blogNavbar}>
        <Socialbar></Socialbar>
      </div>










      <div className={blogposts.mainArticle} dangerouslySetInnerHTML={{ __html: props.contentHtml }} />

    </article>

    {props.related ? (
      <div className={blogposts.relatedDiv}>
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

</div>




    )
}