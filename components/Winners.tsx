'use client'
import styles from './Winners.module.scss'
import { RankItem } from '../types'
import { SassLogo, TrophyStar } from './common/Icons'

export default function Winners() {
  const rank: RankItem[] = [
    { rank: 1, name: 'Natalia Galván', profession: 'Software Engineer', image: 'https://randomuser.me/api/portraits/women/49.jpg' },
    { rank: 2, name: 'Nestor Gonzalez', profession: 'Digital Artist', image: 'https://randomuser.me/api/portraits/men/94.jpg' },
    { rank: 3, name: 'Richard Rossi', profession: 'Software Developer', image: 'https://randomuser.me/api/portraits/men/21.jpg' },
    { rank: 4, name: 'Gabriel Rojas', profession: 'Blockchain Expert', image: 'https://randomuser.me/api/portraits/men/97.jpg' },
    { rank: 5, name: 'Verónica Deckner', profession: 'Digital Artist', image: 'https://randomuser.me/api/portraits/women/90.jpg' },
  ]

  return (
    <>
      <section className={styles['Winners-container']} >
        <div className={styles['Winners']}>
          <div className={styles['Winners__title-container']}>
            <h2>Winners</h2>
            <TrophyStar />
          </div>
          <ul className={styles['Winners__content']}>
            {rank.map(item => (
              <li className={styles['Winners__item']} key={item.rank} >
                <div className={styles['Winners__item__img-box']}>
                  <img src={item.image} alt="profile image" />
                </div>
                <div className={styles['Winners__item__content']}>
                  <h3 className={styles['Winners__item__content__rank']}><span>#</span>{item.rank}</h3>
                  <h4 className={styles['Winners__item__content__name']}>{item.name}</h4>
                  <p className={styles['Winners__item__content__profession']}>{item.profession}</p>
                </div>
              </li>
            ))}
          </ul>
          <footer className={styles['Winners__footer']}>
            <h3>Only</h3><SassLogo />
          </footer>
        </div>
      </section >
    </>
  )
}
