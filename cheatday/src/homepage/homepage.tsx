import { Link } from "react-router-dom";

interface DivsProps {
  text: string;
  img?: string;
  borderradius?: string;
  marginTop?: string;
  marginBottom?: string;
  height?: string;
  width?: string;
  classname?: string;
}

function Divs({
  text,
  img,
  borderradius = "50%",
  marginTop = "0",
  marginBottom = "0",
  height = "20vw",
  width = "20vw",
  classname = "",
}: DivsProps) {
  return (
    <button
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className={classname}
    >
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          padding: "20px",
          width: width,
          height: height,
          display: "flex",
          justifyContent: "center",
          borderRadius: borderradius,
          overflow: "hidden",
          backgroundImage: img ? `url(${img})` : undefined,
          backgroundSize: "cover",
          marginTop: marginTop,
          marginBottom: marginBottom,
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
          <Link to="/restaurant">
            <Divs
              text="Restaurant chooser"
              img="https://www.ktchnrebel.com/wp-content/uploads/2024/02/Republique_cCatherine_DzilenskiFilter-1.jpg"
              classname="hoveringEffect"
            />
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link to={"/profile"}>
            <Divs
              text="Clock"
              img="https://1.bp.blogspot.com/-AB3vQoJGEco/VEoF84U5CpI/AAAAAAAAC-8/ikC3SJsa9xc/s1600/Make%2BAnalog%2BClock%2Bin%2BC%2BUsing%2BGraphics.jpg"
              classname="hoveringEffect"
            />
          </Link>
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
            classname="hoveringEffect"
          />
        </div>
      </div>
    </>
  );
}

export { Homepage, Divs };
