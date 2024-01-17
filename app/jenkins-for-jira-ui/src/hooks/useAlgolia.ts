import { useEffect, useCallback } from 'react';
import algoliasearch from 'algoliasearch';
import envVars from '../common/env';

const ALGOLIA_APP_ID = '8K6J5OJIQW';
const { ALGOLIA_API_KEY } = envVars;

export type Hit = {
	objectID: number,
	title: string
};

type UseAlgoliaProps = {
	indexName: string,
	searchState: SearchState,
	setSearchState(searchResults: SearchState): void
};

export type SearchState = {
	query: string,
	hits: Hit[]
};

export function useAlgolia({ indexName, searchState, setSearchState }: UseAlgoliaProps) {
	console.log('ALGOLIA_API_KEY', ALGOLIA_API_KEY);
	const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
	const index = algoliaClient.initIndex(indexName);

	const search = useCallback(async () => {
		if (searchState.query.trim() === '') {
			setSearchState({ ...searchState, hits: [] });
			return;
		}

		try {
			const results = await index.search<Hit>(searchState.query);
			setSearchState(results);
		} catch (e) {
			console.error('Error searching Algolia index:', e);
		}
	}, [index, searchState, setSearchState]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				await search();
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		fetchData();

		console.log('in here', indexName);
		return () => {
			console.log('returning');
		};
	});

	return searchState;
}
