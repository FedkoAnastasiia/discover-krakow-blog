import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { IEvent } from "@/common/interfaces";

import "./index.scss";

interface IEventPreviewProps {
  event: IEvent;
  gridView: boolean;
}

const EventPrewiew = ({ event, gridView }: IEventPreviewProps) => {
  return (
    <Link
      href={`/events/${event.id}`}
      className={classNames("eventLinkContainer", { gridView })}>
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
