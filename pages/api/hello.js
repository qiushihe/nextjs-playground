// You should not fetch an API Route from getStaticProps or getStaticPaths. Instead, write your
// server-side code directly in getStaticProps or getStaticPaths (or call a helper function).
// The reason being getStaticProps or getStaticPaths only run on server side.
const handler = (req, res) => {
  res.status(200).json({ text: 'Hello' })
}

export default handler
