const App = () => {
  return (
    <div className="h-screen w-full p-2 supports-[height:100dvh]:h-[100dvh]">
      <div className="flex h-full w-full flex-col bg-slate-400">
        <header className="sticky top-0 shrink-0 border-b-2 border-slate-500 p-2">
          [sticky header]
        </header>

        <main className="relative grow p-2">
          <div className="absolute inset-0 overflow-auto p-2">
            <ul className="flex flex-col gap-4">
              {[...Array(50).keys()].map(i => (
                <Message key={`message-${i}`} />
              ))}
            </ul>
          </div>
        </main>

        <footer className="slate-500 shrink-0 border-t-2 border-slate-500 p-2">
          <input
            type="text"
            placeholder="Input"
            className="w-full scroll-p-4 rounded p-2"
          />
        </footer>
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <li className="flex gap-2">
      <div className="mt-1 h-6 w-6 shrink-0 rounded bg-slate-500"></div>

      <div className="grow">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque suscipit
        iusto omnis, corrupti excepturi illum, ipsum rerum ex qui quia dolorem
        blanditiis enim? Atque eaque at reiciendis sed ad nisi!
      </div>
    </li>
  );
};

export default App;
