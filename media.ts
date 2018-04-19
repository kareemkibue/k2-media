import { IMedia, IMediaIos } from "./types";

export const mediaIos: IMediaIos = {
	iPad: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px)',
	iPadFirst: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)',
	iPadFirstLandscape: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1)',
	iPadFirstPotrait: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1)',
	iPadLandscape: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape)',
	iPadMini: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1)',
	iPadMiniLandscape: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1)',
	iPadMiniPortrait: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1)',
	iPadPortrait: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait)',
	iPadRetina: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2)',
	iPadRetinaLandscape: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)',
	iPadRetinaPortrait: '@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)',
	iPhone4: '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2), only screen and (min-device-width: 320px) and (max-device-width: 480px) and (min-device-pixel-ratio: 2)',
	iPhone5: '@media only screen and (min-device-width: 320px) and (max-device-width: 568px)',
	iPhone5Landscape: '@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: landscape)',
	iPhone5Portrait: '@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (orientation: portrait)',
	iPhone6: '@media only screen and (min-device-width: 375px) and (max-device-width: 667px)',
	iPhone6Landscape: '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: landscape)',
	iPhone6Plus: '@media only screen and (min-device-width: 414px) and (max-device-width: 736px)',
	iPhone6PlusLandscape: '@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: landscape)',
	iPhone6PlusPortrait: '@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (orientation: portrait) ',
	iPhone6Portrait: '@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait)',
	iPhone: '@media only screen and (min-device-width: 320px) and (max-device-width: 480px)',
	iPhoneFirst: '@media only screen and (min-device-width: 320px) and (max-device-width: 480px)',
	iPhoneFirstLandscape: '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: landscape)',
	iPhoneLandscape: '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape)',
	iPhonePortait: '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 1) and (orientation: portrait)',
	iPhonePortrait: '@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: portrait)',
};
export const media: IMedia = {
	screenXlg: '@media only screen and (max-width: 1600px)',
	screenLg: '@media only screen and (min-width: 1200px)',
	screenMd: '@media only screen and (max-width: 1199px)',
	screenSm: '@media only screen and (max-width: 991px)',
	screenXs: '@media only screen and (max-width: 767px)',
	screenXxs: '@media only screen and (max-width: 480px)',
	allTablets: '@media only screen and (max-width: 1280px) and (min-resolution: 169dpi), only screen and (max-width: 1024px), only screen and (max-device-width: 1024px)',
	tablet: '@media only screen and (max-width: 1024px), only screen and (max-device-width: 1024px)',
	tabletLandscape: '@media only screen and (max-width: 1024px) and (orientation: landscape), only screen and (max-device-width: 1024px) and (orientation: landscape)',
	tabletPortrait: '@media only screen and (max-width: 768px) and (orientation: portrait), only screen and (max-device-width: 768px) and (orientation: portrait)',
};
export const mediaPrint = {};

export const respond = (minWidth:string, maxWidth:string) => {
	if (minWidth === undefined && maxWidth === undefined) {
		return;
	}

	return `@media only screen and (min-width: ${minWidth}) and (max-width: ${maxWidth})`;
};
export const respondMin = (minWidth:string) => {
	return `@media only screen and (min-width: ${minWidth})`;
};
export const respondMax = (maxWidth:string) => {
	return `@media only screen and (max-width: ${maxWidth})`;
};
