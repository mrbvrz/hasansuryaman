import { request } from "../lib/datocms";
const POST_QUERY = `query {
  post {
    id
    title
    content
  }
}`;
export async function getStaticProps() {
  const data = await request({
    query: POST_QUERY,
    // variables: { limit: 10 }
  });
  return {
    props: { data }
  };
}
export default function Home({ data }) {
  return <div>{JSON.stringify(data, null, 2)}</div>;
}