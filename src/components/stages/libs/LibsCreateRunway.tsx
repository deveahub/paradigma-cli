import React, { useEffect, useState } from 'react';
import Spinner from 'ink-spinner';

import Route from '@/components/router/Route';
import useRouter from '@/components/router/useRouter';

import LibsCreate from './LibsCreate';
import LibsCreateMenuScope from './LibsCreateMenuScope';
import LibsCreateMenuType from './LibsCreateMenuType';

const LibsCreateRunway = () => {
	const [ready, setReady] = useState(false);
	const { push, parameters: { type, scope } = {} } = useRouter();

	useEffect(() => {
		function check() {
			if (type && !scope) {
				push('/libs/create/scope', { type });
			}

			if (type && scope) {
				push('/libs/create/form', { type, scope });
			}
			setReady(true);
		}
		check();
	}, [type, scope, push]);

	return ready ? (
  <>
    <Route exact path="/" component={LibsCreateMenuType} />
    <Route exact path="/scope" component={LibsCreateMenuScope} />
    <Route exact path="/form" component={LibsCreate} />
  </>
	) : (
  <Spinner type="aesthetic" />
	);
};

export default LibsCreateRunway;
