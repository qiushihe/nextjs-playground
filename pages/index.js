import Head from 'next/head'

import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

// In development (npm run dev or yarn dev), getStaticProps runs on every request.
// In production, getStaticProps runs at build time. However, this behavior can be enhanced using
// the fallback key returned by getStaticPaths
export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

// For SSR, export `getServerSideProps`.

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Someone's Introduction</p>
        <p>
          This person is very lazy. They didn't write an introduction for this part of the{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
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
      </section>
    </Layout>
  )
}

export default Home
