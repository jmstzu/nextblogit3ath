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
      <p align="center">[<em>Hello I'm John Mark Salas</em>]</p>
        <hr></hr>
        <p><strong>Introduce yourself.  What are your hobbies, favourite music, favourite food, and other things you can tell me about yourself?</strong>
        </p>
        <p> -  I am 21 years old and currently a BSIT student at the University of the Assumption. 
        </p>
        <p> - My hobbies are listening to music, dancing, and doing sports activities.</p>
        <p> - My favorite type of music is Korean pop or K-pop.</p>
        <p> -  The food that I like is most of the Kapampangan dishes.</p>
       
        <p> <strong> Why did you take up IT?</strong></p>
        <p> - I was already interested in computers when I was younger. I thought to myself how they make the games, websites, and applications that I use.</p>
        <p> <strong>What career do you see yourself exploring after graduation?</strong></p>
        <p> - I see myself exploring more front-end programming or game development.</p>
        <p><strong>What do you expect to learn in this subject?</strong></p>
        <p> - I expect to learn more languages that can help me in the future.</p>
        <p><strong> What topics you want to be discussed in this subject</strong>
        </p>
        <p> - I want to learn topics and languages that have not yet been taught.</p>
        <hr></hr>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}