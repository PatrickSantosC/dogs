import styles from './styles.module.css';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Error from '../../helper/error';
import Input from '../Input';
import Button from '../Button';
import React from 'react';
import { useHistory } from 'react-router';
import Head from '../../helper/Head';
import { PHOTO_POST } from '../../api';

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0]),
    });
  }

  React.useEffect(() => {
    if (data) {
      history.push('/conta');
    }
  }, [data, history]);

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste suas fotos" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url(${img.preview})` }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default UserPhotoPost;
