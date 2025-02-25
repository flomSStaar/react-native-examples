# Example themed app with floating bottom bar

## Features

- Floating bottom bar
- Light/dark mode
- Spacing / Colors / Borders / Shadows constants

### Constants

It is easy to adjust the spacing, colors, borders, and shadows of the app. The constants are defined in the
`src/constants` folder.

For colors, it supports light and dark mode.

```ts
export const Colors = {
  light: {
    tintColor: '#0d74ce',
    headerBackground: '#f7f7f7',
    background: '#F0F0F5',
    text: '#212121',
    surface: '#FFFFFF',
  },
  dark: {
    tintColor: '#f43f5e',
    headerBackground: '#151515',
    background: '#000000',
    text: '#FFFFFF',
    surface: '#1A1A1C',
  },
}
```

## Screenshots

| Écran      | Light                                    | Dark                                    |
|------------|------------------------------------------|-----------------------------------------|
| Accueil    | ![home_top](./images/light/home_top.png) | ![home_top](./images/dark/home_top.png) |
| Carte      | ![map](./images/light/map.png)           | ![map](./images/dark/map.png)           |
| Recherche  | ![search](./images/light/search.png)     | ![search](./images/dark/search.png)     |
| Paramètres | ![settings](./images/light/settings.png) | ![settings](./images/dark/settings.png) |

## Development

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start the app

   ```bash
    pnpm run dev
   ```
