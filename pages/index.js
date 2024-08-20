import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello I'm John Mark I Salas]</p>
        <p>My name is John Mark I. Salas 21 years old currently an BSIT student at University of the Assumption. My hobbies are listening to music, dancing, and doing sports activities, My favorite type of music is korean pop/Kpop, The food that is like is most of kapampangan dishes
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}