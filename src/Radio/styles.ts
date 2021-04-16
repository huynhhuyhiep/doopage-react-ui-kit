import { createStyles, makeStyles } from '@material-ui/core/styles';
import { theme } from '../Theme';
import { getOpacityColor } from '../utils/constants';

const createSwitchColor = (color: string) => ({
	color: `${color} !important`,
});

const createHoverBackgroundColor = (color: string) => ({
	'&:focus,&:hover,&:visited': {
		backgroundColor: getOpacityColor(color)(0.1),
	},
});

const useStyles = makeStyles(() => {
	const {
		primaryColor,
		successColor,
		dangerColor,
		infoColor,
		warningColor,
		grayColor,
	} = theme.colors;

	return createStyles({
		checkbox: {
			'& + .MuiFormControlLabel-label': {
				fontSize: '1rem',
			},
			'&$primary': createHoverBackgroundColor(primaryColor),
			'&$info': createHoverBackgroundColor(infoColor),
			'&$success': createHoverBackgroundColor(successColor),
			'&$danger': createHoverBackgroundColor(dangerColor),
			'&warning': createHoverBackgroundColor(warningColor),
		},
		primary: createSwitchColor(primaryColor),
		info: createSwitchColor(infoColor),
		success: createSwitchColor(successColor),
		warning: createSwitchColor(warningColor),
		danger: createSwitchColor(dangerColor),
		disabled: createSwitchColor(grayColor),
		checkedIcon: {
			width: '18px',
			height: '18px',
			border: '1px solid rgba(0, 0, 0, .54)',
			borderRadius: '3px',
		},
		uncheckedIcon: {
			width: '0px',
			height: '0px',
			padding: '9px',
			borderRadius: '3px',
			border: '1px solid rgba(0, 0, 0, .54)',
		},
		disabledCheckboxAndRadio: {
			'& $checkedIcon,& $uncheckedIcon,& $radioChecked,& $radioUnchecked': {
				borderColor: '#000000',
				opacity: '0.26',
				color: '#000000',
			},
		},
	});
});

export default useStyles;
