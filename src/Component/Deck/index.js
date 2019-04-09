import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useSprings, animated as a, interpolate } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import Card from '../Card';
import style from './style.css';


const cards = [1, 3, 2, 1, 4];

const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = (props) => {
  const { delay } = props;
  const to = i => ({
    x: 0, y: i * -4, scale: 0.8, rot: -10 + Math.random() * 10, delay: i * 50 * delay,
  });
  const from = i => ({
    x: 0, y: i * -4, rot: 0, scale: 1.5, y: -1000,
  });
  const [gone] = useState(() => new Set());
  const [springs, setSprings] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }));
  const bind = useGesture(({
    args: [index], delta: [xDelta], down, direction: [xDir], velocity,
  }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) gone.add(index);
    setSprings((i) => {
      if (index !== i) return; // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 10; // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.2 : 0.9; // Active cards lift up a bit
      return {
       x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });
      if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || setSprings(i => to(i)), 600)
  });
  return (
    <div className="deck-component">
      {springs.map(({x, y, rot, scale}, i) =>
        <a.div key={i} {...bind(i)} style={{transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
          <a.div style={{ transform: interpolate([rot, scale], trans)}}>
            <Card data={cards[i]} i={i} />
          </a.div>
        </a.div>)}
    </div>
  );
};

export default Deck;
