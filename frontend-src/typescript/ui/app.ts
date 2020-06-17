import { html } from 'htm/preact'
import { useSelector, useDispatch } from 'react-redux'
import { State } from '../state'
import { Action, click } from '../actions'
import { Grid } from './grid'
import { Card } from './card'

export function App() {
  const cards = useSelector((state: State) => state.cards)
  const dispatch = useDispatch()

  console.log(cards)
  return html`
    <${Grid}>
      ${cards.map(card => html`
        <${Card} title=${card.title} detail=${card.detail} image=${card.image} />
      `) }
    </${Grid}>
  `;
}