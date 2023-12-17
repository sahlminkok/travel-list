function App() {
  return (
    <>
      <Logo />
      <Form />
      <PackagingList />
      <Stats />
    </>
  );
}

const Logo = () => (
  <div className="logo">
    <h1>🌴 Far Away 💼</h1>
  </div>
);

const Form = () => (
  <div className="add-form">
    <h3>What do you need for your 😍 trip?</h3>
  </div>
);

const PackagingList = () => (
  <div className="list">
    LIST
  </div>
);

const Stats = () => (
  <footer className="stats">
    <em>You have X items on your list, and you already packed X (X%)</em>
  </footer>
);

export default App;
