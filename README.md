Media-Queries
======================

This repository contains a collection of CSS3 media queries curated in SASS, Stylus (coming soon) and JavaScript (for use any React, React/Typescript or any CSS-in-JS implementation)

The breakpoints used are based on the CSS Tricks post "[Media Queries for Standard Devices](http://css-tricks.com/snippets/css/media-queries-for-standard-devices/)".

## Popular Breakpoints covered

+ Tablet ( <= 768px ) 
+ Small screens, ideally small tablets ( < 992px )
+ Mobile ( < 768px ) 

Example of use:
---
```
@include respond(smartphones){
	padding: 3em !important;
}
```

`$media=tablets-landscape` and `$media=tablets-portrait` caters for all tablets (both iPad and Android), in both orientations
