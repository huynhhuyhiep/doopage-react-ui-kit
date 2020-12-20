import { createStyles, makeStyles } from '@material-ui/core/styles';
import { grayColor, primaryColor } from '../utils/color';

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			margin: '0 3px',
			'& label.Mui-focused': {
				color: (props: any) => !props.error && primaryColor,
			},
			'& .MuiInput-underline': {
				'&:before:hover': {
					borderBottomColor: (props: any) => !props.error && grayColor,
				},
				'&:after': {
					borderBottomColor: (props: any) => !props.error && primaryColor,
				},
			},
			'& .MuiOutlinedInput-root': {
				'&:hover fieldset': {
					borderColor: (props: any) => !props.error && grayColor,
				},
				'&.Mui-focused fieldset': {
					borderColor: (props: any) => !props.error && primaryColor,
				},
				'&.Mui-disabled fieldset': {
					borderColor: (props: any) => !props.error && 'rgba(0, 0, 0, 0.18)',
				},
			},
			'& .MuiFilledInput-underline': {
				'&:before:hover': {
					borderBottomColor: (props: any) => !props.error && grayColor,
				},
				'&:after': {
					borderBottomColor: (props: any) => !props.error && primaryColor,
				},
			},
			'& .MuiSvgIcon-root': {
				opacity: 0.7,
			},
		},
	})
);

export default useStyles;
