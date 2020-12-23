import { createStyles, makeStyles } from '@material-ui/core/styles';
import { theme } from '../Theme';
import { getOpacityColor } from '../utils/constants';

const createSwitchColor = (color: string) => ({
	'& .Mui-checked': {
		color,
	},
	'& .Mui-checked:hover': {
		backgroundColor: getOpacityColor(color)(0.1),
	},
	'& .Mui-checked + .MuiSwitch-track': {
		backgroundColor: color,
	},
	'& + .MuiFormControlLabel-label': {
		fontSize: '0.8rem',
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
		primary: createSwitchColor(primaryColor),
		info: createSwitchColor(infoColor),
		success: createSwitchColor(successColor),
		warning: createSwitchColor(warningColor),
		danger: createSwitchColor(dangerColor),
	});
});

export default useStyles;
