const Event = async (props: { params: { id: string } }) => {
  return <div>Event {props.params.id}</div>;
};

export default Event;
