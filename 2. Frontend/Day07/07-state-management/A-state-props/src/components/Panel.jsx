function Panel(props) {
  return (
    <>
      <div style={{ border: "1px solid", padding: "16px" }}>
        <h2>{props.title}</h2>
        {props.isActive && <p>{props.children}</p>}
        {props.isActive || <button onClick={() => props.onShow()}>Show</button>}
      </div>
    </>
  );
}

export default Panel;
