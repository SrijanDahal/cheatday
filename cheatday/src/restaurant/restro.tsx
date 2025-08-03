import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Divs } from "../homepage/homepage";

const RestroChooserHomepage = () => {
  return <div style={{ padding: "0.7rem" }}>{content()}</div>; // Return the content function to render the component
};

const content = () => {
  return (
    <>
      {backlink()}
      {maincontent()}
    </>
  );
};

const backlink = () => {
  return (
    <Link
      to={"/"}
      style={{
        textDecoration: "underline",
        color: "black",
      }}
    >
      <FontAwesomeIcon icon={faArrowLeft} style={{ fontSize: "0.5em" }} />
      <span style={{ marginLeft: "0.5em", fontSize: "0.8rem" }}>Back</span>
    </Link>
  );
};

const maincontent = () => {
  const data = new Date();
  const month = data.toLocaleString("default", { month: "long" });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <div className="month">{month}</div>
      <Divs
        text="RestroName"
        img="https://www.ktchnrebel.com/wp-content/uploads/2024/02/Republique_cCatherine_DzilenskiFilter-1.jpg"
        borderradius="3%"
        marginBottom="1rem"
        marginTop="1rem"
        height="20vw"
        width="40vw"
      />
    </div>
  );
};
export default RestroChooserHomepage;
