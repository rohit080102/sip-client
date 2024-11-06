import {
  animate,
  animateChild,
  group,
  query,
  stagger,
  style,
  state,
  transition,
  trigger,
} from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
  transition('* => *', [
    // each time the binding value changes
    query(':leave', [stagger(500, [animate('0.5s', style({ opacity: 0 }))])], {
      optional: true,
    }),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger(500, [animate('0.5s', style({ opacity: 1 }))]),
      ],
      { optional: true }
    ),
  ]),
]);

export const actionAnimation = trigger('actionAnimation', [
  state(
    'show',
    style({
      height: '*',
      width: '100%',
    })
  ),
  state(
    'hide',
    style({
      margin: 0,
      padding: 0,
      opacity: 0,
      height: '0px',
      width: '0px',
    })
  ),
  transition('* => *', animate('300ms ease-in-out')),
]);
