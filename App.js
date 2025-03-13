function App() {
    const data = "Hello I am vigneshwar reddy";
    return (
      <div>
        <User1 data={data} />
      </div>
    );
  }
  
  function User1({ data }) {
    return <User2 data={data} />;
  }
  function User2({ data }) {
    return <User3 data={data} />;
  }
  
  function User3({ data }) {
    return <User4 data={data} />;
  }
  function User4({ data }) {
    return <div>{data}</div>;
  }
  export default App;