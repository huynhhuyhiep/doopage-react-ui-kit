import ExpansionPanelGroup, {
	ExpansionPanelProps,
} from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';
import React, { FC, memo, ReactNode } from 'react';
import useStyles from './styles';
import { ColorType } from '../utils/constants';

type BaseProps = Omit<ExpansionPanelProps, 'title'>;

export interface AccordionProps extends BaseProps {
	hide?: boolean;
	expandIcon?: ReactNode;
	title?: ReactNode;
	rotateExpandIcon?: boolean;
	color?: ColorType;
}

const Accordion: FC<AccordionProps> = (props) => {
	const classes = useStyles(props);
	const {
		expandIcon = <ExpandMoreIcon />,
		title,
		children,
		rotateExpandIcon = true,
		hide,
		...rest
	} = props;

	if (hide) return null;

	return (
		<ExpansionPanelGroup
			classes={{
				root: classes.expansionPanel,
				expanded: classes.expansionPanelExpanded,
			}}
			{...rest}
		>
			<ExpansionPanelSummary
				expandIcon={expandIcon}
				classes={{
					root: classes.expansionPanelSummary,
					expanded: classes.expansionPanelSummaryExpanded,
					content: classes.expansionPanelSummaryContent,
					expandIcon: classNames(classes.expansionPanelSummaryExpandIcon, {
						[classes.noRotate]: !rotateExpandIcon,
					}),
				}}
			>
				<div className={classes.title}>{title}</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails
				className={classNames(classes.expansionPanelDetails)}
			>
				{children}
			</ExpansionPanelDetails>
		</ExpansionPanelGroup>
	);
};

Accordion.defaultProps = {
	color: 'primary',
};

export default memo(Accordion);
