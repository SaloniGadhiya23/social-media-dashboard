export default function PlatformTabs({current,setCurrent}){
  const tabs=["facebook","instagram","twitter","youtube"];

  return (
    <div className="tabs">
      {tabs.map(t=>(
        <button key={t}
          className={current===t? "active" : ""}
          onClick={()=>setCurrent(t)}>
          {t.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
