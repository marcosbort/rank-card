import RankCard from './RankCard'
import styles from './RankCardContainer.module.scss'

export default function RankCardContainer() {

  return (
    <>
      <section className={styles['RankCardContainer']} >
        <RankCard />
      </section>
    </>
  )
}