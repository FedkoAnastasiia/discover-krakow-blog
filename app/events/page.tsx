"use client";

import { Button, Tabs } from "antd";
import { useState } from "react";
import classNames from "classnames";
import moment from "moment";

import EventPrewiew from "@/components/EventPrewiew";
import events from "@/data/events";

import ListView from "../../data/icons/list-view.svg";
import GridView from "../../data/icons/grid-view.svg";

import "./page.scss";

const Events = () => {
  const [gridView, setGridView] = useState(false);

  const items = [
    {
      label: "All events",
      key: "ALL",
      children: events
        .sort((a, b) => (moment(a.date).isBefore(moment(b.date)) ? 1 : -1))
        .map((e) => <EventPrewiew key={e.id} event={e} gridView={gridView} />),
    },
    {
      label: "Upcoming events",
      key: "UPCOMING",
      children: events
        .filter((e) => moment(e.date).isAfter(moment()))
        .map((e) => <EventPrewiew key={e.id} event={e} gridView={gridView} />),
    },
    {
      label: "Past events",
      key: "PAST",
      children: events
        .filter((e) => moment(e.date).isSameOrBefore(moment()))
        .map((e) => <EventPrewiew key={e.id} event={e} gridView={gridView} />),
    },
  ];

  return (
    <div className="eventsContainer">
      <div className="eventViewChange">
        <button className="iconButton" onClick={() => setGridView(!gridView)}>
          {gridView ? <GridView /> : <ListView />}
        </button>
      </div>
      <Tabs
        className={classNames({ gridView })}
        type="card"
        items={items}
        centered
      />
    </div>
  );
};

export default Events;
