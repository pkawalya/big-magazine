import fetch from 'isomorphic-unfetch'
import Card from 'components/Card'
import { Flex, Box } from 'reflexbox'

const Home = ({ posts }) => {
    console.log(posts)

    return (
        <Box variant="container">
            {/* <Box my={30} as="h2">Latest posts</Box> */}
            <Flex justifyContent="space-between" flexDirection={{ _: "column", md: "row" }}>
                {posts.map(post => (
                    <Box key={post.id} width={{ _: "100%", md: "30%" }}>
                        <Card post={post} />
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env

    const res = await fetch(`${API_URL}/posts`)
    const data = await res.json()

    return {
        props: {
            posts: data
        }
    }
}

export default Home
