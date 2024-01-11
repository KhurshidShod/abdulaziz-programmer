import React from 'react'
import styles from './style.module.scss'

const Experiences = () => {
  return (
    <section className={styles.experiences}>
        <div className="container">
            <div className={styles.experiences__wrapper}>
                <h1>My <span>Experiences</span></h1>
            </div>
        </div>
    </section>
  )
}

export default Experiences