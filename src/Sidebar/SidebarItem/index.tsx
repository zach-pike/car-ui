import "./style.css";

export default function (props: any) {
  return (
    <div className="SidebarIcon" onClick={() => console.log("hello")}>
      {props.children}
    </div>
  );
}
