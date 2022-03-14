import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import {Container, Row, Col} from 'react-bootstrap'
import Image from 'next/image'
import blogposts from '../../pages/posts/blogposts.module.css'
import Socialbar from '../../components/socialBar'

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
export default function Post({ postData }) {
  

    return (
      <div>
        
      <Layout>
        <Container className={blogposts.blogContainer}>
  <Row>
    <Col xs={5}>
   
     <Head>
        <title>{postData.title}</title>
     </Head>

        <article>
          <div className={blogposts.titleBlock}>
            <div className={blogposts.image}>
              
            </div>
            <div className={blogposts.title}>
        <h1 className={utilStyles.blogTitle1}>{postData.title}</h1>
        <h2 className={blogposts.subtitle}>{postData.subtitle}</h2>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          </div>
        </div>
   
        </div>
        <div className={blogposts.imageDescDiv}>
        <span className={blogposts.imageDesc}>{postData.image}</span>
        </div>
        <Socialbar></Socialbar>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
       
      </article>
      </Col>
    <Col>        <div className={blogposts.rightPic}></div>    <Image
              priority
              src="/images/Office.jpg"
              className= {blogposts.rightPic}
              height={100}
              width={100}

            /></Col>
  </Row>
</Container>
      </Layout>
      
      </div>
    )
    
  }