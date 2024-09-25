"use client";

import moment from "moment";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import events from "@/data/events";

import { NotFound } from "@/components/InfoBlock";

import "./page.scss";

const Event = (props: { params: { id: string } }) => {
  const event = Array.from(events).find((p) => p.id === props.params.id);

  const EventPost = useMemo(
    () =>
      dynamic(() => import("@/components/EventPost"), {
        ssr: false,
        loading: () => <p>Loading...</p>,
      }),
    []
  );

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => (
          <p className="mapComponentContainer mapLoading">A map is loading</p>
        ),
        ssr: false,
      }),
    []
  );

  if (!event) return <NotFound />;

  return (
    <div className="eventPageContainer">
      <article className="eventContainer">
        <p className="eventTitle">{event.title}</p>
        <h5>{moment(event.date).format("D MMMM YYYY, dddd")}</h5>
        <EventPost description={event.description} />
      </article>
      <Map location={event.location} />
    </div>
  );
};

export default Event;
