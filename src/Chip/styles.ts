import { createStyles, makeStyles } from '@material-ui/core/styles';
import { theme } from '../Theme';
import { getOpacityColor } from '../utils/constants';

const createSwitchColor = (color: string) => ({
	backgroundColor: color,
	color: '#fff',
	'&$outlined': {
		backgroundColor: 'transparent',
		color,
		border: `1px solid ${color}`,

		'& .MuiChip-deleteIcon': {
			color: getOpacityColor(color)(0.5),
		},
		'& .MuiChip-avatar': {
			color,
		},
	},
	'& .MuiChip-avatar': {
		color: '#fff',
	},
	'& .MuiChip-deleteIcon': {
		color: 'rgba(255, 255, 255, 0.5)',
	},
});

const useStyles = makeStyles(() => {
	const {
		primaryColor,
		successColor,
		dangerColor,
		infoColor,
		warningColor,
	} = theme.colors;

	return createStyles({
		root: {
			'& .MuiChip-deleteIcon': {
				width: 28,
				height: 28,
				marginRight: 2,
			},
			'& .MuiChip-deleteIconSmall': {
				width: 20,
				height: 20,
				marginRight: 2,
			},
		},
		primary: createSwitchColor(primaryColor),
		info: createSwitchColor(infoColor),
		success: createSwitchColor(successColor),
		warning: createSwitchColor(warningColor),
		danger: createSwitchColor(dangerColor),
		outlined: {
			color: '#616161',
		},
		square: {
			borderRadius: 5,
		},
	});
});

export default useStyles;
