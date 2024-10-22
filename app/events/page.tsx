"use client";

import { Button, TabPaneProps, Tabs, TabsProps } from "antd";
import classNames from "classnames";
import moment from "moment";
import { useCallback, useEffect, useMemo, useState } from "react";

import { IEvent } from "@/common/interfaces";
import EventPrewiew from "@/components/EventPrewiew";
import events from "@/data/events";

import ListView from "../../data/icons/list-view.svg";
import GridView from "../../data/icons/grid-view.svg";

import "./page.scss";

const Events = () => {
  const [gridView, setGridView] = useState(false);
  const [activeTab, setActiveTab] = useState("ALL");

  const getEventPreview = useCallback(
    (eventsList: IEvent[]) =>
      eventsList.map((e) => (
        <EventPrewiew key={e.id} event={e} gridView={gridView} />
      )),
    [gridView]
  );

  const getLikedEvents = (activeTab: string) => {
    if (activeTab === "LIKED") {
      const savedEvents = window.localStorage.getItem("saved");
      if (savedEvents) {
        const eventsList = JSON.parse(savedEvents);
        if (Array.isArray(eventsList)) {
          return events.filter((e) => eventsList.includes(e.id));
        }
      }
    }
    return [];
  };

  const items: TabsProps["items"] = useMemo(
    () => [
      {
        label: "All",
        key: "ALL",
        children: getEventPreview(
          events.sort((a, b) =>
            moment(a.date).isBefore(moment(b.date)) ? 1 : -1
          )
        ),
      },
      {
        label: "Upcoming",
        key: "UPCOMING",
        children: getEventPreview(
          events.filter((e) => moment(e.date).isAfter(moment()))
        ),
      },
      {
        label: "Past",
        key: "PAST",
        children: getEventPreview(
          events.filter((e) => moment(e.date).isSameOrBefore(moment()))
        ),
      },
      {
        label: "Liked",
        key: "LIKED",
        children: getEventPreview(getLikedEvents(activeTab)),
      },
    ],
    [getEventPreview, activeTab]
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
        onTabClick={(activeKey) => setActiveTab(activeKey)}
      />
    </div>
  );
};

export default Events;
