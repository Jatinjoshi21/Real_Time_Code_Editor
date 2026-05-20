import React from "react";
import "./App.css";
import { Editor } from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco";
import { useRef, useMemo, useState, useEffect } from "react";
import * as Y from "yjs";
import { SocketIOProvider } from "y-socket.io";

const App = () => {
  const [username, setUsername] = useState(() => {
    return new URLSearchParams(window.location.search).get("username") || "";
  });

  const [isEditorReady, setIsEditorReady] = useState(false);

  const editorRef = useRef(null);

  const [users, setUsers] = useState([]);

  const ydoc = useMemo(() => new Y.Doc(), []);

  const yText = useMemo(() => ydoc.getText("monaco"), [ydoc]);

  const handleMount = (editor) => {
    editorRef.current = editor;
    setIsEditorReady(true);
  };

  useEffect(() => {
    if (username && isEditorReady) {
      const provider = new SocketIOProvider(
        "/",
        "monaco",
        ydoc,
        { autoConnect: true },
      );
      provider.awareness.setLocalStateField("user", { username });

      provider.awareness.on("change", () => {
        const states = Array.from(provider.awareness.getStates().values());
        setUsers(
          states
            .map((state) => state.user)
            .filter((user) => Boolean(user?.username)),
        );
      });

      function handleBeforeUnload() {
        provider.awareness.setLocalStateField("user", null);
      }

      window.addEventListener("beforeunload", handleBeforeUnload);

      const monacoBinding = new MonacoBinding(
        yText,
        editorRef.current.getModel(),
        new Set([editorRef.current]),
        provider.awareness,
      );

      return () => {
        (monacoBinding.destroy(),
          provider.disconnect(),
          window.removeEventListener("beforeunload", handleBeforeUnload));
      };
    }
  }, [isEditorReady, username]);

  const handleJoin = (e) => {
    e.preventDefault();
    setUsername(e.target.username.value);
    window.history.pushState({}, "", "?username=" + e.target.username.value);
  };

  if (!username) {
    return (
      <main className="h-screen w-full bg-gray-950 flex gap-4 p-4 items-center justify-center">
        <form onSubmit={handleJoin} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            className="p-2 rounded-lg bg-gray-800 text-white"
          />
          <button className="p-2 rounded-lg bg-amber-50 text-gray-950 font-bold">
            Join
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="h-screen w-full bg-gray-950 flex gap-4 p-2 ">
      <aside className="h-full w-1/4 bg-amber-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        <ul className="flex flex-col gap-2">
          {users.map((user, index) => (
            <li key={index} className="bg-white p-2 rounded-md shadow">
              {user.username}
            </li>
          ))}
        </ul>
      </aside>
      <section className="h-full w-3/4 bg-neutral-800 rounded-lg overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="//some comment"
          theme="vs-dark"
          onMount={handleMount}
        />
      </section>
    </main>
  );
};

export default App;
