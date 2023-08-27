import Feed from '../Feed/Feed';
import Head from '../Utils/Head';

const Home = () => {
  return (
    <div className="wrapper-user-pages">
      <Head title='Feed' />
      <Feed user={0}/>
    </div>
  )
}

export default Home;