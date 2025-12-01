import { useState } from "react";
import Navbar from "./components/Navbar";
import PlatformTabs from "./components/PlatformTabs";
import ChartBox from "./components/ChartBox";
import MetricCard from "./components/MetricCard";

import facebook from "./data/facebook";
import instagram from "./data/instagram";
import twitter from "./data/twitter";
import youtube from "./data/youtube";

const platforms = { facebook, instagram, twitter, youtube };

export default function App() {
  const [current, setCurrent] = useState("facebook");
  const data = platforms[current];

  return (
    <div className="app">
      <Navbar />
      <PlatformTabs current={current} setCurrent={setCurrent} />
      
      <section className="metrics-container">
        {data.metrics.map((m,i)=> <MetricCard key={i} {...m} />)}
      </section>

      <section className="charts">
        <ChartBox title="Followers Growth" data={data.growth} />
        <ChartBox title="Engagement Rate" data={data.engagement} />
      </section>
    </div>
  );
}
