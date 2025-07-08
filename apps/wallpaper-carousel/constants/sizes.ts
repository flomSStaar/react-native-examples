import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

// Constants for the wallpaper carousel
export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height
export const ITEM_WIDTH = SCREEN_WIDTH * 0.7
export const ITEM_HEIGHT = SCREEN_HEIGHT * 0.6
export const ITEM_SPACING = 32
export const ITEM_BORDER_RADIUS = 20

// Constants for the wallpaper dot
export const DOT_SIZE = 8
export const DOT_ACTIVE_SIZE = 16
export const DOT_RADIUS = DOT_SIZE / 2
export const DOT_SPACING = 8
export const DOT_ACTIVE_COLOR = '#000'
export const DOT_INACTIVE_COLOR = '#ccc'
