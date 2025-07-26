function Divs({ text }: { text: string }) {
  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        padding: "20px",
        width: "20vw",
        height: "20vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        fontSize: "1rem",
      }}
    >
      <h1>{text}</h1>
    </div>
  );
}

function Homepage() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Homepage</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <Divs text="This is a div with rounded corners and centered text." />
        <Divs text="Another div with the same style." />
        <Divs text="Yet another div with the same style." />
      </div>
    </>
  );
}

export default Homepage;
