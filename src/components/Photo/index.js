import React from 'react';
import { useParams } from 'react-router';
import { PHOTO_GET } from '../../api';
import Error from '../../helper/error';
import Head from '../../helper/Head';
import useFetch from '../../hooks/useFetch';
import Loading from '../Loading';
import PhotoContent from '../PhotoContent';

function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;

  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    );
  }

  return null;
}

export default Photo;
