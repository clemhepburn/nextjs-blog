import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a programmer, runner, and architecure enthusiast. I like thinking about web and book design.
          What internet are we making? Who is it for?
        </p>
        <p>
          Currently, I'm spending time at <a href="https://recurse.com">the Recurse Center</a>. You can also find me on <a href="https://twitter.com/clemhepburn">Twitter</a>.
        </p>
      </section>
    </Layout>
  )
}
