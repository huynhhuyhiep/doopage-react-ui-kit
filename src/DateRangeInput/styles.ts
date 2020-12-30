import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
	createStyles({
		trigger: {
			cursor: 'pointer',
			width: 'fit-content',
		},
	})
);

export default useStyles;
