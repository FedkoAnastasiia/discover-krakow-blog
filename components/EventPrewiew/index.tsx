import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { IEvent } from "@/common/interfaces";

import "./index.scss";

const EventPrewiew = (props: { event: IEvent }) => {
  const { event } = props;

  return (
    <Link href={`/events/${event.id}`} className="eventLinkContainer">
      <Image src={event.image} width={280} height={200} alt={event.id} />
      <div className="descriptionContainer">
        <span className="eventDate">
          {moment(event.date).format("DD MMMM YYYY")}
        </span>
        <h2>{event.title}</h2>
        <p>{event.preview}</p>
      </div>
    </Link>
  );
};

export default EventPrewiew;
