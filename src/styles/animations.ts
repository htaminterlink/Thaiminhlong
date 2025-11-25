import { keyframes } from "styled-components";

// Fade animations
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -20%, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-20%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(20%, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

// Zoom animations
export const zoomIn = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const zoomOut = keyframes`
  0% {
    transform: scale(1.05);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Float animation
export const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const downUp = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Pulse animations
export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export const grow = keyframes`
  from {
    transform: scale(0, 0);
    opacity: 1;
  }
  to {
    transform: scale(1.5, 1.5);
    opacity: 0;
  }
`;

// Rotate animations
export const rotate360 = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const spinner = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Shake animations
export const phoneRing = keyframes`
  0% {
    transform: rotate(0) scale(1) skew(1deg);
  }
  10% {
    transform: rotate(-25deg) scale(1) skew(1deg);
  }
  20% {
    transform: rotate(25deg) scale(1) skew(1deg);
  }
  30% {
    transform: rotate(-25deg) scale(1) skew(1deg);
  }
  40% {
    transform: rotate(25deg) scale(1) skew(1deg);
  }
  50% {
    transform: rotate(0) scale(1) skew(1deg);
  }
  100% {
    transform: rotate(0) scale(1) skew(1deg);
  }
`;

export const jelly = keyframes`
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
`;

export const jittery = keyframes`
  5%, 50% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  15% {
    transform: scale(1.05);
  }
  20% {
    transform: scale(1.05) rotate(-5deg);
  }
  25% {
    transform: scale(1.05) rotate(5deg);
  }
  30% {
    transform: scale(1.05) rotate(-3deg);
  }
  35% {
    transform: scale(1.05) rotate(2deg);
  }
  40% {
    transform: scale(1.05) rotate(0);
  }
`;

// Shine effect
export const shine = keyframes`
  100% {
    left: 125%;
  }
`;

// Halo effect
export const halo = keyframes`
  from {
    transform: translate(-50%, -50%) scale(0);
  }
  to {
    transform: translate(-50%, -50%) scale(1);
  }
`;

// Back to top animation
export const BTT = keyframes`
  0% {
    opacity: 0;
  }
  33% {
    opacity: 1;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;
