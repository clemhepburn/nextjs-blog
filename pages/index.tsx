import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import Image from 'next/image';
import Date from '../components/date';
import { GetStaticProps } from 'next';


export default function Home({ 
  allPostsData 
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a programmer & web designer based in Portland, Oregon. <br /> 
          I believe in a vast, creative, handmade web, built with love and curiosity by all, for all. 
        </p>
        <p>
          Currently, I'm spending time at <a href="https://recurse.com">the Recurse Center</a>. You can also find me on <a href="https://twitter.com/clemtoday">Twitter</a>.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Posts</h2>
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
    <footer>
      <Image priority src="/images/heart.png" alt="heart" width={'16px'} height={'16px'} />
    </footer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}
