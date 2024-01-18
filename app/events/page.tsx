import { IEvent } from "@/common/interfaces";
import EventPrewiew from "@/components/EventPrewiew";

const getEvents = async () => {
  return fetch(`${process.env.VERCEL_URL}/api/events`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => console.log(err.message));
};

const Events = async () => {
  const events: IEvent[] = await getEvents();

  console.log("%c events", "color:green", events);

  return (
    <div>
      {events.map((e) => (
        <EventPrewiew key={e.id} event={e} />
      ))}
    </div>
  );
};

export default Events;
