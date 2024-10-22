import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import SaveItem from "../SaveItem";
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
      <div>
        <Image src={event.image} width={280} height={200} alt={event.id} />
        <SaveItem id={event.id} />
      </div>
      <div className="descriptionContainer">
        <span className="eventDate">
          {moment(event.date).format("DD MMMM YYYY")}
        </span>
        <h2>{event.title}</h2>
        <p className="scrollbox">{event.preview}</p>
      </div>
    </Link>
  );
};

export default EventPrewiew;
