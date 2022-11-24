export const ChatAnswer = ({message = ''}) => {
  return (
    <>
      {
        message && (<div className="chat-message clearfix answer">
        <div className="chat-message-answer-content clearfix">
            { message }
        </div>
      </div>)
      }
      
    </>
  )
}
