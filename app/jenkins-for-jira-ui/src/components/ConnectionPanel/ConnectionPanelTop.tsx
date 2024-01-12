import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { cx } from '@emotion/css';
import Button from '@atlaskit/button/standard-button';
import MoreIcon from '@atlaskit/icon/glyph/more';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import {
	connectionPanelHeaderContainer,
	connectionPanelHeaderContentContainer,
	connectionPanelTopContainer,
	ipAddressStyle,
	serverName
} from './ConnectionPanel.styles';
import { ConnectedState, StatusLabel } from '../StatusLabel/StatusLabel';
import { disconnectJenkinsServer } from '../../api/disconnectJenkinsServer';
import { JenkinsModal } from '../JenkinsServerList/ConnectedServer/JenkinsModal';
import { DISCONNECT_MODAL_TEST_ID } from '../JenkinsServerList/ConnectedServer/ConnectedServers';
import { JenkinsServer } from '../../../../src/common/types';

const connectedStateColors: Record<ConnectedState, { textColor: string; backgroundColor: string }> = {
	[ConnectedState.CONNECTED]: { textColor: '#206e4e', backgroundColor: '#dcfff1' },
	[ConnectedState.DUPLICATE]: { textColor: '#ae2e24', backgroundColor: '#ffecea' },
	[ConnectedState.PENDING]: { textColor: '#a54900', backgroundColor: '#fff7d6' },
	[ConnectedState.UPDATE_AVAILABLE]: { textColor: '#0054cb', backgroundColor: '#e8f2ff' }
};

const setConnectedState = (
	server: JenkinsServer,
	isUpdatingServer: boolean,
	updatedServer?: JenkinsServer
): ConnectedState => {
	let connectedState;

	if (isUpdatingServer || !updatedServer) {
		connectedState = server.connectedState;
	} else if (updatedServer && updatedServer.uuid === server.uuid) {
		connectedState = updatedServer?.connectedState;
	}

	return connectedState || ConnectedState.PENDING;
};

type ConnectionPanelTopProps = {
	server: JenkinsServer,
	refreshServers(serverToRemove: JenkinsServer): void,
	updatedServer?: JenkinsServer,
	isUpdatingServer: boolean
};
const ConnectionPanelTop = ({

	server,
	refreshServers,
	updatedServer,
	isUpdatingServer
}: ConnectionPanelTopProps): JSX.Element => {
	const history = useHistory();
	const connectedState = setConnectedState(server, isUpdatingServer, updatedServer);
	const { textColor, backgroundColor } = connectedStateColors[connectedState];
	const [serverToDisconnect, setServerToDisconnect] = useState<JenkinsServer>();
	const [showConfirmServerDisconnect, setShowConfirmServerDisconnect] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onClickDisconnect = async (serverToDelete: JenkinsServer) => {
		setServerToDisconnect(serverToDelete);
		setShowConfirmServerDisconnect(true);
	};

	const onClickConnectionSettings = async (serverToOpen: JenkinsServer) => {
		history.push(`/setup/${serverToOpen.uuid}/connection-settings`);
	};

	const onClickRename = async (serverToRename: JenkinsServer) => {
		history.push(`/update-server-name/${serverToRename.uuid}`);
	};

	const disconnectJenkinsServerHandler = async (
		serverToDelete: JenkinsServer
	) => {
		setIsLoading(true);

		try {
			await disconnectJenkinsServer(serverToDelete.uuid);
			refreshServers(serverToDelete);
			closeConfirmServerDisconnect();
		} catch (e) {
			console.log('Failed to disconnect server', e);
			// TODO - add error state ARC-2722
		} finally {
			setIsLoading(false);
		}
	};

	const closeConfirmServerDisconnect = async () => {
		setShowConfirmServerDisconnect(false);
		setIsLoading(false);
	};

	return (
		<div className={cx(connectionPanelTopContainer)}>
			<div className={cx(connectionPanelHeaderContainer)}>
				<div className={cx(connectionPanelHeaderContentContainer)}>
					<h2 className={cx(serverName)}>{server.name}</h2>
					<StatusLabel text={connectedState} color={textColor} backgroundColor={backgroundColor} />
				</div>
				<div>
					{
						server.pluginConfig?.ipAddress &&
							<p className={cx(ipAddressStyle)}>IP address: {server.pluginConfig?.ipAddress}</p>
					}
				</div>
			</div>

			{server.connectedState !== ConnectedState.DUPLICATE &&
				<DropdownMenu
					trigger={({ triggerRef, ...props }) => (
						<Button
							{...props}
							iconBefore={<MoreIcon label="more" />}
							ref={triggerRef}
							testId={`dropdown-menu-${server.name}`}
						/>
					)}
				>
					<DropdownItemGroup>
						<DropdownItem onClick={() => onClickRename(server)}>Rename</DropdownItem>
						<DropdownItem onClick={() => onClickConnectionSettings(server)}>
							Connection settings
						</DropdownItem>
						<DropdownItem onClick={() => onClickDisconnect(server)}>Disconnect</DropdownItem>
					</DropdownItemGroup>
				</DropdownMenu>
			}
			<JenkinsModal
				dataTestId={DISCONNECT_MODAL_TEST_ID}
				server={serverToDisconnect}
				show={showConfirmServerDisconnect}
				modalAppearance='warning'
				title='Disconnect this Jenkins server?'
				body={[
					'Are you sure that you want to disconnect your Jenkins server, ',
					<strong key={server.name}>{serverToDisconnect?.name}</strong>,
					'? This means that you disconnect all associated Jenkins jobs, and will have to add a new server in Jira if you ever want to reconnect.'
				]}
				onClose={closeConfirmServerDisconnect}
				primaryButtonAppearance='subtle'
				primaryButtonLabel='Cancel'
				secondaryButtonAppearance='warning'
				secondaryButtonLabel='Disconnect'
				secondaryButtonOnClick={disconnectJenkinsServerHandler}
				isLoading={isLoading}
			/>
		</div>
	);
};

export { ConnectionPanelTop };
