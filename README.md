# K2-Media

A small library containing a collection of CSS3 media queries curated for use in SASS, and JavaScript (React, React/Typescript or any CSS-in-JS
implementation).

The breakpoints used are based on the post
"[Media Queries for Standard Devices](http://css-tricks.com/snippets/css/media-queries-for-standard-devices/)" by CSS Tricks.

**Table of Contents**

-   [Getting Started](#getting-started)
-   [How to use](#how-to-use)
    -   [React/JavaScript](#reactjavascript) _(media, mediaIos, respond)_
    -   [SASS](#sass)
-   [Changelog](#changelog)

## Getting Started

Install via `npm`:

```
npm install k2-media --save
```

Alternatively via `yarn`:

```
yarn add k2-media
```

## How to use

### React/JavaScript

1.  Use `media (Object: IMedia)` for set breakpoints

    Popular breakpoints covered `media` (IMedia):

    | Name     | Breakpoint (px)     | Devices                               |
    | -------- | ------------------- | ------------------------------------- |
    | screenMd | < 1200px            | Smaller PCS & laptops                 |
    | tablet   | < 1025px (<=1024px) | iPads, 8"+ Android Tablets            |
    | screenSm | < 992px             | Small tablets                         |
    | screenXs | < 768px (<=767px)   | iPad Portrait, Standard mobile phones |

    Tablet only breakpoints under `media: IMedia`:

    | Name            | Breakpoint (px)     | Devices                                                                                                             |
    | --------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------- |
    | allTablets      | < 1281px (>169 dpi) | All tablets (and smartphones) irrespective of viewport width. Unlike `tablet` this takes the DPI into consideration |
    | tabletLandscape | < 1025px (<=1024px) | All tablets (and smartphones) in landscape orientation                                                              |
    | tabletPortrait  | < 768px             | All tablets (and smartphones) in portrait orientation                                                               |

    Less common breakpoints covered under `media: IMedia`:

    | Name      | Breakpoint (px) | Devices                      |
    | --------- | --------------- | ---------------------------- |
    | screenLg  | > 1200px        | Standard PCs, laptops        |
    | screenXxs | < 481px         | Smaller mobile phone screens |
    | screenXxs | < 481px         | Smaller mobile phone screens |
    | screenXxs | < 481px         | Smaller mobile phone screens |

    ```
    import { media } from 'k2-media';

    /* in css */
    `
    width: 20%;

    ${ media.screenMd }{
        width: 25%;
    }

    ${ media.tablet }{
        width: 33%;
    }

    ${ media.screenSm }{
        width: 50%;
    }

    ${ media.screenXs }{
        width: 100%;
    }
    `
    ```

2.  For greater flexibility, use `respondMax: Function`, `respondMin: Function` or `respond: Function`

-   _respondMax( maxWidth: string )_

    ```
    import { respondMax } from 'k2-media';

    /* in css */
    `
    background: #f0f0f0;

    ${ respondMax('1000px') }{
        background: #f7f7f7;
    }
    `
    ```

-   _respondMin( minWidth: string )_

    ```
    import { respondMin } from 'k2-media';

    /* in css */
    `
    background: #f0f0f0;

    ${ respondMin('550px') }{
        background: #f7f7f7;
    }
    `
    ```

-   _respond( minWidth: string, maxWidth: string )_

    ```
    import { respond } from 'k2-media';

    /* in css */
    `
    background: #f0f0f0;

    /* styles will only be applied within these 2 breakpoints */
    ${ respond('500px','1000px') }{
        background: #f7f7f7;
    }
    `
    ```

3.  Use `IMediaIos (Object: IMediaIos)` for iOs only breakpoints (iOs Safari compatible)

    | Name                 | Breakpoint (px)    | Devices                                           |
    | -------------------- | ------------------ | ------------------------------------------------- |
    | iPad                 | > 767px && <1024px | all iPads (landscape or portrait)                 |
    | iPadLandscape        | > 767px && <1024px | all iPads (landscape)                             |
    | iPadPortrait         | > 767px && <1024px | all iPads (portrait)                              |
    | iPadFirst            | > 767px && <1024px | 1st Gen iPads, non-retina (landscape or portrait) |
    | iPadFirstLandscape   | > 767px && <1024px | 1st Gen iPads, non-retina (landscape)             |
    | iPadFirstPotrait     | > 767px && <1024px | 1st Gen iPads, non-retina (portrait)              |
    | iPadFirstPotrait     | > 767px && <1024px | 1st Gen iPads, non-retina (portrait)              |
    | iPadMini             | > 767px && <1024px | iPadMini (landscape or portrait)                  |
    | iPadMiniLandscape    | > 767px && <1024px | iPadMini (landscape)                              |
    | iPadMiniPortrait     | > 767px && <1024px | iPadMini (portrait)                               |
    | iPadRetina           | > 767px && <1024px | iPad, retina screen (landscape or portrait)       |
    | iPadRetinaLandscape  | > 767px && <1024px | iPad, retina screen (landscape)                   |
    | iPadRetinaPortrait   | > 767px && <1024px | iPad, retina screen (portrait)                    |
    | iPhone               | >= 320px && <481px | all iPhones (landscape or portrait)               |
    | iPhoneFirst          | >= 320px && <481px | 1st Gen iPhone (landscape or portrait)            |
    | iPhoneFirstLandscape | >= 320px && <481px | 1st Gen iPhone (landscape)                        |
    | iPhoneFirstPortrait  | >= 320px && <481px | 1st Gen iPhone (portrait)                         |
    | iPhone4              | >= 320px && <480px | iPhone4 (landscape or portrait)                   |
    | iPhone5              | >= 320px && <568px | iPhone5 (landscape or portrait)                   |
    | iPhone5Landscape     | >= 320px && <568px | iPhone5 (landscape)                               |
    | iPhone5Portrait      | >= 320px && <568px | iPhone5 (portrait)                                |
    | iPhone6              | > 375px && <667px  | iPhone6 (landscape or portrait)                   |
    | iPhone6Landscape     | > 375px && <667px  | iPhone6 (landscape)                               |
    | iPhone6Portrait      | > 375px && <667px  | iPhone6 (portrait)                                |
    | iPhone6Plus          | > 414px && <736px  | iPhone6 Plus (landscape or portrait)              |
    | iPhone6PlusLandscape | > 414px && <736px  | iPhone6 Plus (landscape)                          |
    | iPhone6PlusPortrait  | > 414px && <736px  | iPhone6 Plus (portrait)                           |


    ```
    import { mediaIos } from 'k2-media';

    /* in css */
    `
    display: flex;
        ${ mediaIos.screenMd }{
            display: inline-flex;
        }
    `
    ```

### SASS

_TBD_

<!--
````

@include respond(smartphones){ padding: 3em !important; }

```
`$media=tablets-landscape` and `$media=tablets-portrait` caters for all tablets (both iPad and Android), in both orientations -->

## Changelog

**Version 0.4.0**

-   :memo: Added docs
