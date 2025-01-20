/** @format */

import {PixelRatio} from 'react-native';
// -----------------------------------------------------------------------------
import {deviceWidth, deviceHeight} from '~/constants';

// basic content dimension (12 iPhone)
const baseWidth = 390;
const baseHeight = 690;

// ---------------------------------MAIN_CALCULATION----------------------------

const scaleWidth = deviceWidth / baseWidth;
const scaleHeight = deviceHeight / baseHeight;

const fontScale = Math.min(scaleWidth, scaleHeight);

const heightPixelRatio = (amount: number) =>
	PixelRatio.roundToNearestPixel(deviceHeight * amount);
const widthPixelRatio = (amount: number) =>
	PixelRatio.roundToNearestPixel(deviceWidth * amount);

const convertHeightPixelsToPercent = (heightInPx: number) =>
	heightInPx / baseHeight;

const convertWidthPixelsToPercent = (widthInPx: number) =>
	widthInPx / baseWidth;

// ---------------------------------MAIN_CALCULATION----------------------------

// ---------------------------------USABLE_PARAMS-------------------------------

export const calcHeight = (px: number) => {
	return heightPixelRatio(convertHeightPixelsToPercent(px));
};

export const calcWidth = (px: number) =>
	widthPixelRatio(convertWidthPixelsToPercent(px));

export const calcSize = (px: number) =>
	deviceWidth < deviceHeight ? calcWidth(px) : calcHeight(px);

export const calcFontSize = (size: number) => size * fontScale;

// --------------------------------USABLE_PARAMS--------------------------------
