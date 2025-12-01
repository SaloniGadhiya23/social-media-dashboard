import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

export default function ChartBox({title,data}){
  const formatted = data.map((v,i)=>({name:`W${i+1}`,value:v}));

  return(
    <div className="chart-box">
      <h2>{title}</h2>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={formatted}>
          <Line type="monotone" dataKey="value" strokeWidth={3} dot />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
