import { Component } from 'preact'
import { html } from 'htm/preact'

export const Grid = ({ children }: {children: Array<Component> }) => html`
  <div class="grid dynamic">
    ${children.map(child => html`
      <div class="grid-child">${child}</div>
    `) }
  </div>
`

/*

m_h = (16/25) * h
w / (16/25)h = 16 / 9


*/