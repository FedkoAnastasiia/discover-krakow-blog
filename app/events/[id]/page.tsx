import { MapProvider } from "@/providers/map-provider";
import { MapComponent } from "@/components/Map";
import events from "@/data/events";

import { NotFound } from "@/components/InfoBlock";

import "./page.scss";

const Event = async (props: { params: { id: string } }) => {
  const event = Array.from(events).find((p) => p.id === props.params.id);
  if (!event) return <NotFound />;

  return (
    <MapProvider>
      <article className="eventContainer">
        <h1>{event.title}</h1>
        <h6>{event.date}</h6>
        <p>{event.description}</p>
      </article>

      <MapComponent location={event.location} />
    </MapProvider>
  );
};

export default Event;
