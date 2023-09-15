"use client"
import styles from './RankCard.module.scss'
import { Tilt } from 'react-tilt'

const defaultOptions = {
  reverse: false,  // reverse the tilt direction
  max: 35,     // max tilt rotation (degrees)
  perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1,    // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000,   // Speed of the enter/exit transition
  transition: true,   // Set a transition on enter/exit.
  axis: null,   // What axis should be disabled. Can be X or Y.
  reset: true,    // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function RankCard() {
  return (
    <>
      <Tilt className={styles['RankCard']} options={defaultOptions} >
        <h2 className={styles['RankCard__title']}>Rank Card</h2>
      </Tilt>
    </>
  )
}