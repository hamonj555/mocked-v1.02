export interface Effect {
  id: string;
  name: string;
  icon: string;
  color?: string;
}

export const videoEffects: Effect[] = [
  { id: 'fulmine', name: 'Fulmine', icon: 'Zap', color: '#FFD700' },
  { id: 'esplosione', name: 'Esplosione', icon: 'Flame', color: '#FF6B00' },
  { id: 'cinema', name: 'Cinema', icon: 'Clapperboard', color: '#FFFFFF' },
  { id: 'luce', name: 'Luce', icon: 'Sun', color: '#FFD700' },
  { id: 'zoom', name: 'Zoom', icon: 'Search', color: '#8ECDFF' },
  { id: 'glimmer', name: 'Glimmer', icon: 'Sparkles', color: '#FFD700' },
  { id: 'fiamme', name: 'Fiamme', icon: 'Flame', color: '#FF6B00' },
  { id: 'spazio', name: 'Spazio', icon: 'MoonStar', color: '#8A56FF' },
  { id: 'onde', name: 'Onde', icon: 'Waves', color: '#00BFFF' },
  { id: 'occhio', name: 'Occhio', icon: 'Eye', color: '#FFFFFF' },
  { id: 'glitch', name: 'Glitch Digitale', icon: 'ScanLine', color: '#8A56FF' },
  { id: 'blur', name: 'Blur', icon: 'CircleDashed', color: '#FFFFFF' },
  { id: 'vintage', name: 'Vintage', icon: 'Film', color: '#D2B48C' },
  { id: 'mirror', name: 'Mirror', icon: 'FlipHorizontal', color: '#00BFFF' },
  { id: 'slow', name: 'Slow Motion', icon: 'Hourglass', color: '#FFFFFF' },
  { id: 'fast', name: 'Fast Motion', icon: 'FastForward', color: '#FFFFFF' },
  { id: 'reverse', name: 'Reverse', icon: 'Rewind', color: '#FFFFFF' },
  { id: 'pixelate', name: 'Pixelate', icon: 'Grid', color: '#FFFFFF' },
  { id: 'negative', name: 'Negative', icon: 'Contrast', color: '#FFFFFF' },
  { id: 'sepia', name: 'Sepia', icon: 'Palette', color: '#D2B48C' },
  { id: 'blackwhite', name: 'Black & White', icon: 'CircleHalf', color: '#FFFFFF' },
  { id: 'vignette', name: 'Vignette', icon: 'CircleDot', color: '#FFFFFF' },
  { id: 'sharpen', name: 'Sharpen', icon: 'Diamond', color: '#FFFFFF' },
  { id: 'fisheye', name: 'Fisheye', icon: 'CircleDashed', color: '#00BFFF' },
  { id: 'grain', name: 'Grain', icon: 'SandClock', color: '#D2B48C' },
];

export const appliedEffects = ['Glitch Digitale', 'Zoom'];