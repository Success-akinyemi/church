import { childrenVideo } from "../../data/ChlidrenVideo"
import ChildrenVideos from "./ChildrenVideos"

function ChildreConerCategory() {
  const video = childrenVideo
  return (
    <div>
      <div className="flex w-full pad1">
        <div className="w-full p-8 rounded-[20px] mt-8 mb-8 bg-main-color-dark text-white flex items-center justify-center">
            <h2 className="text-[32px] tablet:text-[26px] phone:text-[24px] font-semibold">Children Stories</h2>
        </div>
      </div>

      <ChildrenVideos data={video} />
    </div>
  )
}

export default ChildreConerCategory
