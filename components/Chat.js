import { useContext, useState } from "react";
import { AppContext } from "./Store";

function Chat() {
  const {state, dispatch} = useContext(AppContext);
  const {chatItems} = state
  const [chatInput, setChatInput] = useState("");

  console.log(chatItems);

  const HandleChatSubmit = (e) => {
    e.preventDefault();
    setChatInput("");
    dispatch({ type: "SUBMITCHAT", payload: chatInput });
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
            class="bi bi-dash text-white ml-auto"
            viewBox="0 0 16 16"
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
        <div className="w-full h-1/3 md:h-2/4">
          {chatItems}
        </div>
        <form onSubmit={HandleChatSubmit} className="flex flex-col items-center p-2">
            <input type="text" /*value={chat}*/ value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Type your message here" className="py-5 md:py-10 px-3 w-full border border-black" />
            <button type="submit" className="ml-auto bg-blue-500 py-1 px-3 mt-2 rounded text-white">ENTER</button>
        </form>
    </div>
  );
}

export default Chat
