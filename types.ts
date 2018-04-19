interface IMedia{
screenXlg: string;
screenLg: string;
screenMd: string;
screenSm: string;
screenXs: string;
screenXxs: string;
allTablets: string;
tablet: string;
tabletLandscape:string;
tabletPortrait: string;
}

interface IMediaIos{
    iPad:string;
	iPadFirst:string;
	iPadFirstLandscape:string;
	iPadFirstPotrait:string;
	iPadLandscape:string;
	iPadMini:string;
	iPadMiniLandscape:string;
	iPadMiniPortrait:string;
	iPadPortrait:string;
	iPadRetina:string;
	iPadRetinaLandscape:string;
	iPadRetinaPortrait:string;
	iPhone4:string;
	iPhone5:string;
	iPhone5Landscape: string;
	iPhone5Portrait: string;
	iPhone6: string;
	iPhone6Landscape: string;
	iPhone6Plus: string;
	iPhone6PlusLandscape: string;
	iPhone6PlusPortrait: string;
	iPhone6Portrait: string;
	iPhone: string;
	iPhoneFirst: string;
	iPhoneFirstLandscape: string;
	iPhoneLandscape: string;
	iPhonePortait: string;
	iPhonePortrait:string;
}

export {IMedia, IMediaIos}