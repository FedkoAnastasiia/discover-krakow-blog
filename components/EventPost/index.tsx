import "./index.scss";

export interface IEventPostProps {
  description: string;
}

const EventPost = ({ description }: IEventPostProps) => {
  const eventDescription = document.createElement("div");
  eventDescription.innerHTML = description;
  eventDescription.className = "eventDescription";
  return <>{eventDescription}</>;
};

export default EventPost;
