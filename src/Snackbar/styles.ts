import { createStyles, makeStyles } from '@material-ui/core/styles';
import { theme } from '../Theme';
import { getHoverShadow } from '../utils/constants';

const createSwitchColor = (color: string) => ({
	backgroundColor: `${color} !important`,
	boxShadow: getHoverShadow(color),
	'& .MuiSvgIcon-root': {
		fontSize: `28px !important`,
		boxShadow: getHoverShadow('#999999'),
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
		default: createSwitchColor(grayColor),
		primary: createSwitchColor(primaryColor),
		info: createSwitchColor(infoColor),
		success: createSwitchColor(successColor),
		warning: createSwitchColor(warningColor),
		danger: createSwitchColor(dangerColor),
	});
});

export default useStyles;
