import React from 'react';
import { cx } from '@emotion/css';
import Button from '@atlaskit/button';
import { ConnectedState } from '../StatusLabel/StatusLabel';
import {
	notConnectedStateContainer,
	notConnectedStateHeader,
	notConnectedStateParagraph, notConnectedTempImgPlaceholder
} from './ConnectionPanel.styles';

type NotConnectedStateProps = {
	connectedState: ConnectedState
};

const NotConnectedState = ({ connectedState }: NotConnectedStateProps): JSX.Element => {
	const notConnectedHeader =
        connectedState === ConnectedState.PENDING ? 'Connection pending' : 'Duplicate server';
	const notConnectedP1 =
        connectedState === ConnectedState.PENDING ? 'This connection is pending completion by a Jenkins admin. Its set up guide will be available when the connection is complete.' : 'This connection is a duplicate of SERVER NAME.';
	const notConnectedP2 =
        connectedState === ConnectedState.PENDING ? 'Open connection settings if your Jenkins admin needs to revisit the items they need.' : 'Use SERVER NAME to manage this server.';

	return (
		<div className={cx(notConnectedStateContainer)}>
			<div className={cx(notConnectedTempImgPlaceholder)}></div>
			<h3 className={cx(notConnectedStateHeader)}>{notConnectedHeader}</h3>
			<p className={cx(notConnectedStateParagraph)}>{notConnectedP1}</p>
			<p className={cx(notConnectedStateParagraph)}>{notConnectedP2}</p>
			{/* TODO - add onClick handler */}
			{ConnectedState.PENDING
				? <Button>Connection settings</Button>
				: <Button appearance="danger">Delete</Button>
			}
		</div>
	);
};

export { NotConnectedState };
