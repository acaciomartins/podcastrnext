

export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

//SPA - iria usar dentro useEffect(), porém não seria renderizado pelo next.js
//SSR
// export async function getServerSideProps() {
//SSG
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, //a cada 8h uma nova chamada
  }
}