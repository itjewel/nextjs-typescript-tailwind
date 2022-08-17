import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>This is a home Page</h1>
      <div className="w-full text-xl text-gray-600 first-letter:text-9xl first-letter:text-blue-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore nisi quam dolores recusandae reprehenderit velit sapiente neque impedit veniam ab incidunt doloremque quibusdam libero? Quisquam eum in accusantium deleniti!
    </div>
    </div>
  )
}

export default Home
