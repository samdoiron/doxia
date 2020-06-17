interface Click {
  type: 'click'
} 

export function click(): Click {
  return { type: 'click' }
}

export type Action = Click;

