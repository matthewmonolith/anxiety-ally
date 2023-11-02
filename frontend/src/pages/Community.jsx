import PostCard from "../components/Postcard"
import FlexHeading from "../components/FlexHeading"
import UserInfo from "../components/UserInfo"
import FeedContainer from "../components/FeedContainer"
import { useNavbarHeight } from "../components/NavbarHeightContext"
import { useGetPostsQuery } from '../slices/postsApiSlice'
import { Flex } from "@chakra-ui/react"
import Postcard from "../components/Postcard"



const Community = () => {
  const {data: posts, isloading, error} = useGetPostsQuery();
  const navbarHeight = useNavbarHeight();

  return (

    <div style={{paddingTop: `${navbarHeight}px`}}>
    {isloading ? (<h2>Loading...</h2>) : error ? (
    <div>
      {error?.data?.message || error.error}
    </div>
    ) : (
      <>
        <Flex>
          <UserInfo />
          <FeedContainer title="Community Hub"/>
        </Flex>
      </>
      )}
    </div>
  )
}

export default Community