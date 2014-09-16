SASS-CSS3Media-Queries
======================

SASS Media Query Mixin Library

Based on CSS Tricks "Media Queries for Standard Devices"
http://css-tricks.com/snippets/css/media-queries-for-standard-devices/

$media=tablets-landscape and $media=tablets-portrait caters for all tablets (both iPad and Android), in both orientations

Example of use:

@include respond(smartphones){
	padding: 3em !important;
}
