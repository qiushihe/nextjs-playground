import Head from 'next/head'

import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout'
import Date from '../../components/date'

// In development (npm run dev or yarn dev), getStaticPaths runs on every request.
// In production, getStaticPaths runs at build time.
export const getStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}

const Post = ({ postData  }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export default Post
