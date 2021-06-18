import Input from '../Input';
import Button from '../Button';
import Error from '../../helper/error';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import { PASSWORD_LOST } from '../../api';
import Head from '../../helper/Head';

function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();
  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: 'http://localhost:3000/login/resetar',
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}

export default LoginPasswordLost;
