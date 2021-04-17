import { createStyles, makeStyles } from '@material-ui/core/styles';
import { getColor } from '../utils/constants';
import { AccordionProps } from './index';

const useStyles = makeStyles(({ breakpoints }) =>
	createStyles({
		root: {
			flexGrow: 1,
			// marginBottom: "20px"
		},
		expansionPanel: {
			boxShadow: 'none',
			width: '100%',
			padding: 15,
			'&:before': {
				display: 'none !important',
			},
		},
		expansionPanelExpanded: {
			margin: '0 !important',
		},
		expansionPanelSummary: {
			// transition: 'all 300ms ease-in-out',
			height: 30,
			minHeight: 'auto !important',
			backgroundColor: 'transparent',
			padding: 0,
			borderTopLeftRadius: '3px',
			borderTopRightRadius: '3px',
			color: '#3C4858',
			'&:hover': {
				color: (props: AccordionProps) => getColor(props.color),
			},
		},
		expansionPanelSummaryExpanded: {
			color: (props: AccordionProps) => getColor(props.color),
			'& $expansionPanelSummaryExpandIcon': {
				[breakpoints.up('md')]: {
					top: 'auto !important',
				},
				transform: 'rotate(180deg)',
			},
		},
		expansionPanelSummaryContent: {
			margin: '0 !important',
		},
		expansionPanelSummaryExpandIcon: {
			[breakpoints.up('md')]: {
				top: 'auto !important',
			},
			transform: 'rotate(0deg)',
			color: 'inherit',
		},
		expansionPanelSummaryExpandIconExpanded: {},
		noRotate: {
			transform: 'none !important',
		},
		title: {
			display: 'flex',
			alignItems: 'center',
			fontSize: '15px',
			fontWeight: 'bolder',
			marginTop: '0',
			marginBottom: '0',
			color: 'inherit',
		},
		expansionPanelDetails: {
			padding: '6px 0px 5px',
			display: 'block',
		},
		expansionPanelTitleIcon: {
			margin: 'auto 10px',
			fontSize: '20px',
		},
	})
);

export default useStyles;
