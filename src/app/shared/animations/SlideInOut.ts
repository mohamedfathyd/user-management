/*

*/
import {
  trigger, state, style, transition,
    animate, group, query, stagger, keyframes
  } from '@angular/animations';
  
  export const SlideInOutAnimation = [
    trigger('slideInOut', [
      transition('in => in2', [
        style({transform: 'translateX(-25%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('in2 => in', [
        style({transform: 'translateX(-25%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('out => in', [
        style({transform: 'translateX(-25%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('out2 => in', [
        style({transform: 'translateX(-25%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('in => out', [
        style({transform: 'translateX(25%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('in2 => out', [
        style({transform: 'translateX(25%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('out => out2', [
        style({transform: 'translateX(25%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('out2 => out', [
        style({transform: 'translateX(25%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ]),
    trigger('slideInOutCard', [
      transition('in => in2', [
        style({transform: 'translateX(-25%)'}),
        animate('250ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('in2 => in', [
        style({transform: 'translateX(-25%)'}),
        animate('250ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('out => in', [
        style({transform: 'translateX(-25%)'}),
        animate('250ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('out2 => in', [
        style({transform: 'translateX(-25%)'}),
        animate('250ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('in => out', [
        style({transform: 'translateX(25%)'}),
        animate('250ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('in2 => out', [
        style({transform: 'translateX(25%)'}),
        animate('250ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('out => out2', [
        style({transform: 'translateX(25%)'}),
        animate('250ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition('out2 => out', [
        style({transform: 'translateX(25%)'}),
        animate('250ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
    ])
  ]