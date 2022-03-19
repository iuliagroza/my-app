import CardAuthor from "./CardAuthor";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";

function Card(props) {
  return (
    <div className="card">
      <CardImage src={props.image} alt={props.alt} />
      <div className="card-text-container">
        <CardAuthor text={props.author} />
        <CardTitle text={props.title} />
        <CardBody text={props.body} />
      </div>
    </div>
  );
}

export default Card;
