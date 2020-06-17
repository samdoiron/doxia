import { html } from 'htm/preact'
import { Spacer } from './spacer';

export const Card = (
  { title, detail, image }:
  { title: string, detail: string, image: string }
) => {
  return html`
  <div class="card">
    <img src="${image}" class="card-media"></img>
    <div class="card-text">
      <${Spacer} size="1">
        <h1 class="dynamic">${title}</h1>
        <p class="card-detail dynamic">
          ${detail}
        </p>
      </${Spacer}>
    </div>
  </div>
  `;
}