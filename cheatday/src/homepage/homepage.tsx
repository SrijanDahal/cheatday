interface DivsProps {
  text: string;
  img?: string;
}

function Divs({ text, img }: DivsProps) {
  return (
    <>
      <button
        style={{ background: "none", border: "none", cursor: "pointer" }}
        className="hoveringEffect"
      >
        <div
          style={{
            textAlign: "center",
            border: "1px solid black",
            padding: "20px",
            width: "20vw",
            height: "20vw",
            display: "flex",
            justifyContent: "center",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundImage: img ? `url(${img})` : undefined,
            backgroundSize: "cover",
          }}
        ></div>

        <h2
          style={{
            marginTop: "10px",
            fontSize: "1rem",
            textAlign: "center",
            textDecoration: "underline",
          }}
        >
          {text}
        </h2>
      </button>
    </>
  );
}

function Homepage() {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "1rem" }}>Homepage</h1>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Divs
            text="Restaurant chooser"
            img="https://www.ktchnrebel.com/wp-content/uploads/2024/02/Republique_cCatherine_DzilenskiFilter-1.jpg"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Divs
            text="Clock"
            img="https://1.bp.blogspot.com/-AB3vQoJGEco/VEoF84U5CpI/AAAAAAAAC-8/ikC3SJsa9xc/s1600/Make%2BAnalog%2BClock%2Bin%2BC%2BUsing%2BGraphics.jpg"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Divs
            text="To Do list"
            img="https://marketplace.canva.com/EAFMNOETBMM/1/0/1131w/canva-neutral-classy-minimalist-to-do-list-planner-Pjan5M7tYOE.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Homepage;
