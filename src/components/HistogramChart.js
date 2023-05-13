import { ResponsiveBar } from "@nivo/bar";

function HistogramChart({ data }) {
  return (
    <div className="chart">
      <ResponsiveBar
        data={data}
        keys={["frequency"]}
        indexBy="word"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0} 
        layout="vertical"
        colors={{ scheme: "nivo" }}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Word",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Frequency",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  );
}

export default HistogramChart;
