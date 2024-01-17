import { cx } from '@emotion/css';
import { NoServersConnectedIcon } from '../icons/NoServersConnectedIcon';
import { globalStateEmptyStateContainer } from './GlobalPage.styles';

export const GlobalPageEmptyState = (): JSX.Element => {
	return (
		<div className={cx(globalStateEmptyStateContainer)}>
			<NoServersConnectedIcon containerClassName="blah" />
			<h3>No servers connected</h3>
			<p>Once a site admin has conneted a server, you'll see it listed here together with its set up guide.</p>
		</div>
	);
};
