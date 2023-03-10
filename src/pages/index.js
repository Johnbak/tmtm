import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { fontWeight } from '@mui/system';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Topper086 & miiin.t</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div style={{
          display : "flex",
          justifyContent : "center",
          paddingTop : "20px",
          color : "#8B0000",
          fontWeight:"bolder"
        }}>
        <h1>Wedding</h1>
        </div>
   
        <div className={styles.description}>
       
          <h1>Topper086   ♡  miiin.t</h1>
        </div>
        {/* <div style={{
          display:"flex",
          justifyContent:"top",
          padding : "10px"
        }}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            
            >
             
            
            </a>
          </div> */}
        {/* <div className={styles.center}> */}
         <Image
                src="/cat-mini.png"
                alt=""
                className={styles.myElement}
                style={{
                  objectFit: "contain",
                  width: "100% !important" ,
                  position: "relative !important",
                  height: "unset !important",
                  // marginTop : "-15%"
                }}
                width="1000"
                height={"100"}
  
              />
          {/* <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div> */}
        {/* </div> */}

          {/* <div style={{
              position: "fixed",
              bottom: 0,
              paddingBottom: "25px",
              display : "flex",
              justifyContent : "center",
              width:"100%"
          }}>
            Foter
          </div> */}

        {/* <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </>
  )
}
