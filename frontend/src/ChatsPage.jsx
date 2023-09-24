import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId="b60de512-5cfa-474d-b3e2-73f31a16f1ae"
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;
