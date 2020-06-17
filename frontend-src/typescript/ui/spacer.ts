import { Component } from 'preact'
import { html } from 'htm/preact'

type Alignment = 'start' | 'center';

export const Spacer = ({ size, align = 'start', children }:
  {size: number, align: Alignment, children: Array<Component>}) => (
  html`
  <div class="spacer-${size} spacer-align-${align}">
    ${children}
  </div>
  `
)