"use client";

import { Button, TabPaneProps, Tabs, TabsProps } from "antd";
import classNames from "classnames";
import { useCallback, useEffect, useMemo, useState } from "react";
import moment from "moment";

import { IEvent } from "@/common/interfaces";
import EventPrewiew from "@/components/EventPrewiew";
import events from "@/data/events";

import ListView from "../../data/icons/list-view.svg";
import GridView from "../../data/icons/grid-view.svg";

import "./page.scss";

const Events = () => {
  const [gridView, setGridView] = useState(false);

  const getEventPreview = useCallback(
    (eventsList: IEvent[]) =>
      eventsList.map((e) => (
        <EventPrewiew key={e.id} event={e} gridView={gridView} />
      )),
    [gridView]
  );

  const items: TabsProps["items"] = useMemo(
    () => [
      {
        label: "All events",
        key: "ALL",
        children: getEventPreview(
          events.sort((a, b) =>
            moment(a.date).isBefore(moment(b.date)) ? 1 : -1
          )
        ),
      },
      {
        label: "Upcoming events",
        key: "UPCOMING",
        children: getEventPreview(
          events.filter((e) => moment(e.date).isAfter(moment()))
        ),
      },
      {
        label: "Past events",
        key: "PAST",
        children: getEventPreview(
          events.filter((e) => moment(e.date).isSameOrBefore(moment()))
        ),
      },
    ],
    [getEventPreview]
  );

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
