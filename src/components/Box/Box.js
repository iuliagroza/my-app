import BoxBody from "./BoxBody";
import BoxImage from "./BoxImage";
import BoxTitle from "./BoxTitle";

function Box(props) {
  return (
    <div className="box">
      <BoxImage src={props.image} alt={props.alt} />
      <BoxTitle text={props.title} />
      <BoxBody text={props.body} />
    </div>
  );
}

export default Box;
