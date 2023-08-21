# frida-android-floating-menu

A floating menu for Android

## Features

- **Switches** (toggle on/off)
- **SeekBars** (slide to set value)
- **Buttons On/Off** (toggle on/off)
- **ButtonLink** (click to open link)
- **CheckBoxes** (tick to set value)
- **InputNumber** (enter number to set value)
- **InputText** (enter text to set value)
- **TextViews** (display rich text)
- **WebView** (display web page with real html/css)

## Installation

```sh
npm install -D frida-android-floating-menu
```

## Usage

```ts
import {Menu, Config,  Primitive as P}  from "frida-android-floating-menu";


const mainActivity = getMainActivity(...);

const menu = new Menu(mainActivity);
menu.attach();

const isGodMode = P.of(false);
const playerSpeed = P.of(0);

menu.Switch("God Mode", isGodMode);
menu.SeekBar("Player Speed", playerSpeed, 0, 100);
...
```

See the old classes [Dex implementation](https://github.com/maarsalien/frida-android-mod-menu-example)
for more examples.

## Screenshots

![Screenshot](https://raw.githubusercontent.com/leonardocardoso/FloatingActionButton/master/screenshots/screenshot1.png)

## Credits

- [LGLTeam](https://github.com/LGLTeam/Android-Mod-Menu) for the original **Android-Mod-Menu**.
