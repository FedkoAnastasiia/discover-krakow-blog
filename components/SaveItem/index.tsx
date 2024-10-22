"use client";

import { MouseEvent, useEffect, useState } from "react";

import FullHeart from "../../data/icons/heart-filled.svg";
import EmptyHeart from "../../data/icons/heart-empty.svg";

interface ISaveItemProps {
  id: string;
}

const SaveItem = ({ id }: ISaveItemProps) => {
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const savedEvents = window.localStorage.getItem("saved");
    if (savedEvents) {
      const eventsList = JSON.parse(savedEvents);
      if (Array.isArray(eventsList)) {
        if (eventsList.includes(id)) {
          setFilled(true);
        }
      }
    }
  }, [id]);

  const OnHeartClick = (e: MouseEvent) => {
    e.preventDefault();
    const savedEvents = window.localStorage.getItem("saved");
    if (savedEvents) {
      const eventsList = JSON.parse(savedEvents);
      if (Array.isArray(eventsList)) {
        if (!eventsList.includes(id) && !filled) {
          //dislike => like
          eventsList.push(id);
          window.localStorage.setItem("saved", JSON.stringify(eventsList));
        } else if (eventsList.includes(id) && filled) {
          //like => dislike
          window.localStorage.setItem(
            "saved",
            JSON.stringify(eventsList.filter((e) => e !== id))
          );
        }
      } else {
        alert("Something went wrong...");
      }
    } else {
      window.localStorage.setItem("saved", JSON.stringify(filled ? [] : [id]));
    }

    setFilled(!filled);
  };

  return (
    <button className="iconButton" onClick={OnHeartClick}>
      {filled ? <FullHeart /> : <EmptyHeart />}
    </button>
  );
};

export default SaveItem;
