import { previousMessages } from "../../data/previousMessages"
import MessagesSection from "../Helpers/MessagesCard"

function PreviousMessages() {
  const messages = previousMessages
  return (
    <div className="pad1">
        <MessagesSection data={messages} />
    </div>
  )
}

export default PreviousMessages
