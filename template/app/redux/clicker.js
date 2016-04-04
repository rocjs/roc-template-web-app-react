const CLICKED = 'CLICKED';

export default function clicker(state = 0, action = { increment: 1 }) {
  if (action.type === CLICKED) {
    return state + action.increment;
  }

  return state;
}

export function click(increment) {
  return { type: CLICKED, increment };
}
