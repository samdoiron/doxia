

interface Card {
  title: string,
  detail: string,
  image: string
}

export interface State {
  cards: Array<Card>
}

export const initialState: State = {
  cards: [
    {
      title: 'The Fey Forest',
      detail: 'You find yourself in a dark tangled Wood. What mysteries lurk here?',
      image: '/images/fey.png'
    },
    {
      title: 'Helena Bay',
      detail: 'Waves crash across the rocks. This is usually a quiet plcae, but a night it comes alive.',
      image: '/images/coastal.jpg'
    }
  ]
}