# K2-Media

A small library containing a collection of CSS3 media queries curated for use in SASS, and JavaScript (React, React/Typescript or any CSS-in-JS
implementation)

The breakpoints used are based on the post
"[Media Queries for Standard Devices](http://css-tricks.com/snippets/css/media-queries-for-standard-devices/)" by CSS Tricks.

**Table of Contents**

-   [Getting Started](#getting-started)
-   [How to use](#how-to-use)
    -   [React/JavaScript](#react/javascript)
        <!---   [SASS](#SASS)-->
-   [Changelog](#Changelog)

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

Popular breakpoints covered:

| Name      | Breakpoint (px)     | Devices                               |
| --------- | ------------------- | ------------------------------------- |
| screenMd  | < 1200px            | Smaller PCS & laptops                 |
| tablet    | < 1025px (<=1024px) | iPads, 8"+ Android Tablets            |
| screenSm  | < 992px             | Small tablets                         |
| screenXs  | < 768px (<=767px)   | iPad Portrait, Standard mobile phones |
| screenXxs | < 481px             | Smaller mobile phone screens          |

Less common breakpoints covered:

| Name      | Breakpoint (px) | Devices                                                                                           |
| --------- | --------------- | ------------------------------------------------------------------------------------------------- |
| tabletAll | < 1799px        | All tablets irrespective of viewport width. Unlike `tablet` this takes the DPI into consideration |

### React/JavaScript

1.  For set breakpoints, use `media` _(Object)_

    ```
    import { media } from 'k2-media';

    /* in css */
    `
    display: flex;

    ${ media.screenMd }{
        display: inline-flex;
    }
    `
    ```

2.  For greater flexibility, use `respondMax` _(Function)_, `respondMin` _(Function)_ or `respond` _(Function)_

-   **respondMax( maxWidth: string )**

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

-   **respondMin( minWidth: string )**

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

-   **respond( minWidth: string, maxWidth: string )**

    ```
    import { respond } from 'k2-media';

    /* in css */
    `
    background: #f0f0f0;

    /* styles will only be applied in these 2 breakpoints */
    ${ respond('500px','1000px') }{
        background: #f7f7f7;
    }
    `
    ```

<!--
### SASS
```
@include respond(smartphones){ padding: 3em !important; }
```
`$media=tablets-landscape` and `$media=tablets-portrait` caters for all tablets (both iPad and Android), in both orientations -->

## Changelog

**Version 0.4.0**

-   :memo: Added docs
