import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Store";

function Chat() {
  const {state, dispatch} = useContext(AppContext);
  const {chatItems} = state
  const [chatInput, setChatInput] = useState();
  const [bot, setBot] = useState(false);

  const HandleChatSubmit = (e) => {
    e.preventDefault();
    if (chatInput) {
      let item = {chatInput}
      dispatch({ type: "SUBMITCHAT", payload: item });
    }
    setChatInput("");
    setBot(true);
  }

  const HandleCloseChat = () => {
    dispatch({type: "CLOSECHAT"});
  }
  

  return (
    <div className="fixed bottom-5 right-5 md:w-1/4 w-4/5 bg-white h-3/4 rounded-md">
      <div className="bg-blue-500 flex p-7 w-full rounded-t-md">
        <h2 className="text-white font-semibold text-xl">Live Chat</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="30"
          fill="currentColor"
          className="bi bi-dash text-white ml-auto cursor-pointer"
          viewBox="0 0 16 16"
          onClick={HandleCloseChat}
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </div>
      <div className="shadow-lg flex items-center md:p-3 ">
        <img
          src="https://static-markup.octaglobal.info/common/components-frontsite/footer.v1/assets/img/trading-app-redesign.svg?b7df906ece81137b5885fdcb93f638a3="
          alt="footer logo"
          className="w-11 h-11 rounded-full"
        />
        <div className="m-3">
          <h2 className="font-bold text-xl">OctaFX</h2>
          <span>Support</span>
        </div>
      </div>
      <div className="w-full h-2/5">
        {chatItems.map((item) => {
          return (
            <div className="flex justify-end p-4 bg-slate-400 my-2 font-bold">
              {item.chatInput}
            </div>
          );
        })}
        <div>
          {bot ? (
            <div className="flex justify-start p-4 bg-blue-500 my-2 font-bold text-white">
              Thank You For Contacting Us. <br /> We Are Currently Unavailable At the Moment. <br /> Try Again Later.
            </div>
          ) : (
            <div className="flex justify-start p-4 bg-blue-500 my-2 font-bold text-white">
              Welcome! How Can I Help You?
            </div>
          )}
        </div>
      </div>
      <form
        onSubmit={HandleChatSubmit}
        className="flex flex-col items-center p-2"
      >
        <input
          type="text"
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
          placeholder="Type your message here"
          className="py-5 md:py-6 px-3 w-full border border-black"
        />
        <button
          type="submit"
          className="ml-auto bg-blue-500 py-1 px-3 mt-2 rounded text-white"
        >
          ENTER
        </button>
      </form>
    </div>
  );
}

export default Chat
