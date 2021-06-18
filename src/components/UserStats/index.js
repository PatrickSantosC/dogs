import React from 'react';
import Head from '../../helper/Head';
import useFetch from '../../hooks/useFetch';
import { STATS_GET } from '../../api';

import Loading from '../Loading';
import Error from '../../helper/error';
const UserStatsGraphs = React.lazy(() => import('../UserStatsGraphs'));

function UserStats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <section>
        <React.Suspense fallback={<div></div>}>
          <Head title="Estatísticas" />
          <UserStatsGraphs data={data} />
        </React.Suspense>
      </section>
    );
  }
  return null;
}

export default UserStats;
