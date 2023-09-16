'use client'
import styles from './RankCard.module.scss'
import { RankItem } from './../types'

export default function RankCard() {
  const rank: RankItem[] = [
    { rank: 1, name: 'Ricardo Galván', detail: 'Digital Artist', image: 'https://randomuser.me/api/portraits/men/90.jpg' },
    { rank: 2, name: 'Nestor Esponja', detail: 'Digital Artist', image: 'https://randomuser.me/api/portraits/men/94.jpg' },
    { rank: 3, name: 'Claudia Gonzalez', detail: 'Digital Artist', image: 'https://randomuser.me/api/portraits/men/95.jpg' },
    { rank: 4, name: 'Richard Hirsch', detail: 'Digital Artist', image: 'https://randomuser.me/api/portraits/men/97.jpg' },
    { rank: 5, name: 'Mariano Martinez', detail: 'Digital Artist', image: 'https://randomuser.me/api/portraits/men/99.jpg' },
  ]

  return (
    <>
      <section className={styles['RankCard-container']} >
        <div className={styles['RankCard']} > {/* box */}
          <h2 className={styles['RankCard__title']}>Rank Card</h2>
          <div className={styles['RankCard__content']}>
            {rank.map(item => (
              <>
                <div className={styles['RankCard__item']}> {/* list */}
                  <div className={styles['RankCard__item__img-box']}>
                    <img src={item.image} alt="profile image" />
                  </div>
                  <div className={styles['RankCard__item__content']}>
                    <h3 className={styles['RankCard__item__content__rank']}><span>#</span>{item.rank}</h3>
                    <h4 className={styles['RankCard__item__content__name']}>{item.name}</h4>
                    <p className={styles['RankCard__item__content__detail']}>{item.detail}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
