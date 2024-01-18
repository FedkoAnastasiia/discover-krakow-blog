import { IEvent } from "@/common/interfaces";
import Image from "next/image";
import Link from "next/link";
import styles from "./EventPrewiew.module.css";

const EventPrewiew = (props: { event: IEvent }) => {
  const { event } = props;

  return (
    <Link href={`/events/${event.id}`} className={styles.container}>
      <Image src={event.image} width={150} height={100} alt={event.id} />
      <div className={styles.descriptionContainer}>
        <span>{event.date}</span>
        <h3>{event.title}</h3>
        <p>{event.preview}</p>
      </div>
    </Link>
  );
};

export default EventPrewiew;
