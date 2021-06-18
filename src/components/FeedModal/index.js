import styles from './styles.module.css';
import useFetch from '../../hooks/useFetch';
import React from 'react';
import { PHOTO_GET } from '../../api';
import Error from '../../helper/error';
import Loading from '../Loading';
import PhotoContent from '../PhotoContent';

function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [request, photo]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }
  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}

export default FeedModal;
