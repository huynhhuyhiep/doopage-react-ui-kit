import { createStyles, makeStyles } from '@material-ui/core/styles';
import { theme } from '../Theme';
import { getHoverShadow, getOpacityColor, getShadow } from '../utils/constants';

const createButtonShadow = (backgroundColor: string) => ({
	boxShadow: getShadow(backgroundColor),
	backgroundColor,
	'&:hover,&:focus': {
		backgroundColor,
		boxShadow: getHoverShadow(backgroundColor),
	},
});

const createButtonSmooth = (color: string) => {
	const opacityColor = getOpacityColor(color);
	return {
		'&': {
			color,
			backgroundColor: opacityColor(0.25),
			border: `1px solid ${opacityColor(0.85)}`,
		},
		'&:focus,&:hover,&:visited': {
			border: `1px solid ${opacityColor(1)}`,
		},
	};
};

const useStyles = makeStyles(() => {
	const {
		grayColor,
		primaryColor,
		successColor,
		dangerColor,
		infoColor,
		warningColor,
	} = theme.colors;

	return createStyles({
		button: {
			...createButtonShadow(grayColor),
			minHeight: 'auto',
			minWidth: 'auto',
			color: '#FFFFFF',
			border: 'none',
			borderRadius: '3px',
			position: 'relative',
			padding: '8px 20px',
			margin: '.3125rem 1px',
			fontSize: '0.8rem',
			fontWeight: 500,
			letterSpacing: '0.25',
			willChange: 'box-shadow, transform',
			textTransform: 'unset',
			transition:
				'box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
			lineHeight: '1.42857143',
			textAlign: 'center',
			whiteSpace: 'nowrap',
			verticalAlign: 'middle',
			touchAction: 'manipulation',
			cursor: 'pointer',
			'& .fab,& .fas,& .far,& .fal,& .material-icons': {
				position: 'relative',
				display: 'inline-block',
				top: '0',
				marginTop: '-1em',
				marginBottom: '-1em',
				fontSize: '1.1rem',
				marginRight: '4px',
				verticalAlign: 'middle',
			},
			'& svg': {
				position: 'relative',
				display: 'inline-block',
				top: '0',
				width: '18px',
				height: '18px',
				marginRight: '4px',
				verticalAlign: 'middle',
			},
			'&$justIcon': {
				'& .fab,& .fas,& .far,& .fal,& .material-icons': {
					marginRight: '0px',
					marginTop: '0px',
					position: 'absolute',
					width: '100%',
					transform: 'none',
					left: '0px',
					top: '0px',
					height: '100%',
					lineHeight: '41px',
					fontSize: '24px',
				},
			},
		},
		fullWidth: {
			width: '100%',
		},
		upcaseText: {
			textTransform: 'uppercase',
		},
		primary: createButtonShadow(primaryColor),
		info: createButtonShadow(infoColor),
		success: createButtonShadow(successColor),
		warning: createButtonShadow(warningColor),
		danger: createButtonShadow(dangerColor),
		white: {
			'&,&:focus,&:hover': {
				backgroundColor: '#FFFFFF !important',
				color: grayColor,
			},
		},
		gray: createButtonShadow(grayColor),
		simple: {
			'&,&:focus,&:hover': {
				color: '#FFFFFF',
				background: 'transparent !important',
				boxShadow: 'none',
			},
			'&$primary': {
				'&,&:focus,&:hover,&:visited': {
					color: primaryColor,
				},
			},
			'&$info': {
				'&,&:focus,&:hover,&:visited': {
					color: infoColor,
				},
			},
			'&$success': {
				'&,&:focus,&:hover,&:visited': {
					color: successColor,
				},
			},
			'&$warning': {
				'&,&:focus,&:hover,&:visited': {
					color: warningColor,
				},
			},
			'&$danger': {
				'&,&:focus,&:hover,&:visited': {
					color: dangerColor,
				},
			},
			'&$white': {
				'&,&:focus,&:hover,&:visited': {
					color: `#000 !important`,
				},
			},
			'&$gray': {
				'&,&:focus,&:hover,&:visited': {
					color: `${grayColor} !important`,
				},
			},
		},
		transparent: {
			'&,&:focus,&:hover': {
				color: 'inherit',
				background: 'transparent',
				boxShadow: 'none',
			},
		},
		disabled: {
			opacity: '0.65',
			pointerEvents: 'none',
		},
		large: {
			padding: '1.125rem 2.25rem',
			fontSize: '0.875rem',
			lineHeight: '1.333333',
			borderRadius: '0.2rem',
		},
		normal: {},
		small: {
			padding: '5px 12px',
			fontSize: '0.6875rem',
			lineHeight: '1.5',
			borderRadius: '0.2rem',
		},
		tiny: {
			padding: '5px 15px',
			fontSize: 8,
			lineHeight: '1.5',
			borderRadius: '0.2rem',
		},
		round: {
			borderRadius: '30px',
		},
		outline: {
			'&,&:focus,&:hover': {
				backgroundColor: 'transparent !important',
				borderWidth: 2,
				borderStyle: 'solid',
			},
			'&$primary': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: primaryColor,
					color: primaryColor,
				},
			},
			'&$info': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: infoColor,
					color: infoColor,
				},
			},
			'&$success': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: successColor,
					color: successColor,
				},
			},
			'&$warning': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: warningColor,
					color: warningColor,
				},
			},
			'&$danger': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: dangerColor,
					color: dangerColor,
				},
			},
		},
		roundCorner: {
			'&,&:focus,&:hover': {
				borderRadius: '16px',
				borderTopLeftRadius: '5px',
				borderBottomRightRadius: '5px',
				background: 'transparent',
				borderWidth: 2,
				borderStyle: 'solid',
			},
			'&$primary': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: primaryColor,
					color: primaryColor,
				},
			},
			'&$info': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: infoColor,
					color: infoColor,
				},
			},
			'&$success': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: successColor,
					color: successColor,
				},
			},
			'&$warning': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: warningColor,
					color: warningColor,
				},
			},
			'&$danger': {
				'&,&:focus,&:hover,&:visited': {
					borderColor: dangerColor,
					color: dangerColor,
				},
			},
		},
		link: {
			'&,&:hover,&:focus': {
				backgroundColor: 'transparent',
				color: '#999999',
				boxShadow: 'none',
			},
		},
		justIcon: {
			paddingLeft: '12px',
			paddingRight: '12px',
			fontSize: '20px',
			height: '40px',
			minWidth: '40px',
			width: '40px',
			'& .fab,& .fas,& .far,& .fal,& svg': {
				marginRight: '0px',
			},
			'&$large': {
				height: '57px',
				minWidth: '57px',
				width: '57px',
				lineHeight: '56px',
				'& .fab,& .fas,& .far,& .fal': {
					fontSize: '32px',
					lineHeight: '56px',
				},
				'& svg': {
					width: '32px',
					height: '32px',
				},
			},
			'&$small': {
				height: '30px',
				minWidth: '30px',
				width: '30px',
				'& .fab,& .fas,& .far,& .fal': {
					fontSize: '17px',
					lineHeight: '29px',
				},
				'& svg': {
					width: '17px',
					height: '17px',
				},
			},
			'&$tiny': {
				height: '24px',
				minWidth: '24px',
				width: '24px',
				'& .fab,& .fas,& .far,& .fal,& .material-icons': {
					fontSize: '1.1rem !important',
					lineHeight: '25px !important',
				},
				'& svg': {
					width: '13px',
					height: '13px',
				},
			},
		},
		smooth: {
			boxShadow: 'none',
			background: 'inherit',
			fontWeight: 400,
			'&$gray': createButtonSmooth(grayColor),
			'&$primary': createButtonSmooth(primaryColor),
			'&$info': createButtonSmooth(infoColor),
			'&$success': createButtonSmooth(successColor),
			'&$warning': createButtonSmooth(warningColor),
			'&$danger': createButtonSmooth(dangerColor),
		},
	});
});

export default useStyles;
