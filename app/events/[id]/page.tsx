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
        <h1>{event.title}</h1>
        <h6>{event.date}</h6>
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
