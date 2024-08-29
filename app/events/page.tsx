"use client";

import { Tabs } from "antd";
import moment from "moment";

import EventPrewiew from "@/components/EventPrewiew";
import events from "@/data/events";

import "./page.scss";

const Events = () => {
  const items = [
    {
      label: "All events",
      key: "ALL",
      children: events
        .sort((a, b) => (moment(a.date).isBefore(moment(b.date)) ? 1 : -1))
        .map((e) => <EventPrewiew key={e.id} event={e} />),
    },
    {
      label: "Upcoming events",
      key: "UPCOMING",
      children: events
        .filter((e) => moment(e.date).isAfter(moment()))
        .map((e) => <EventPrewiew key={e.id} event={e} />),
    },
    {
      label: "Past events",
      key: "PAST",
      children: events
        .filter((e) => moment(e.date).isSameOrBefore(moment()))
        .map((e) => <EventPrewiew key={e.id} event={e} />),
    },
  ];

  return (
    <div className="eventsContainer">
      <Tabs type="card" items={items} centered />
    </div>
  );
};

export default Events;
