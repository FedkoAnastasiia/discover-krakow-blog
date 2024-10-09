import DOMPurify from "dompurify";

import "./index.scss";

export interface IEventPostProps {
  description: string;
}

const EventPost = ({ description }: IEventPostProps) => {
  return (
    <div
      className="eventDescription"
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
    />
  );
};

export default EventPost;
