import { childrenVideo } from "../../data/ChlidrenVideo"
import ChildrenVideos from "./ChildrenVideos"

function ChildreConerCategory() {
  const video = childrenVideo
  return (
    <div>
      
      <ChildrenVideos data={video} />
    </div>
  )
}

export default ChildreConerCategory
