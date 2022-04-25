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


          <ArticleStyle1 props={postData}> </ArticleStyle1>
        )}
    </div>
  )

}