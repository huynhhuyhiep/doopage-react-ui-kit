import { createStyles, makeStyles } from '@material-ui/core/styles';
import { theme } from '../Theme';
import { getOpacityColor, getTextColor } from '../utils/constants';
import { ChipProps, isCustomColor } from './index';

const createChipColor = (color: string) => ({
	backgroundColor: color,
	color: getTextColor(color),
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
		color: getTextColor(color),
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
		primary: createChipColor(primaryColor),
		info: createChipColor(infoColor),
		success: createChipColor(successColor),
		warning: createChipColor(warningColor),
		danger: createChipColor(dangerColor),
		outlined: {
			color: '#616161',
		},
		square: {
			borderRadius: 5,
		},
		customColor: (props: ChipProps) =>
			createChipColor(
				isCustomColor(props.color) ? props.color || '#999999' : '#999999'
			),
	});
});

export default useStyles;
