import moment from "moment";

import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "@/components/Map";
import events from "@/data/events";

import { NotFound } from "@/components/InfoBlock";

import "./page.scss";

const Event = (props: { params: { id: string } }) => {
  const event = Array.from(events).find((p) => p.id === props.params.id);

  if (!event) return <NotFound />;

  return (
    <MapProvider>
      <article className="eventContainer">
        <p className="eventTitle">{event.title}</p>
        <h5>{moment(event.date).format("D MMMM YYYY, dddd")}</h5>
        <div
          className="eventDescription"
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
      </article>

      <MapComponent location={event.location} />
    </MapProvider>
  );
};

export default Event;
