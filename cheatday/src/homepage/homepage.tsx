function Divs({ text }: { text: string }) {
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        padding: "20px",
        borderRadius: "50%",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}

function Homepage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Homepage</h1>
      <Divs text={"jkfs"} />
    </div>
  );
}

export default Homepage;
