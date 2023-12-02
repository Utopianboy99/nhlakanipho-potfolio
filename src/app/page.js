import styles from './page.module.css'
import Banner from './components/banner/banner'
import About from './components/About/about'
import Resume from './components/resume/resume'


export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <About />
      <Resume />
    </main>
  )
}
