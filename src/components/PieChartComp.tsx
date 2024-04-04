import { PieChart } from "@mui/x-charts/PieChart";
import ElementList from "../service/ElementApi";

export default function PieChartComponent() {
  let gas = 0;
  let solid = 0;
  let liquid = 0;
  let plasma = 0;

  ElementList.forEach((element) => {
    switch (element.phase) {
      case "Gas":
        gas++;
        break;
      case "Solid":
        solid++;
        break;
      case "Liquid":
        liquid++;
        break;
      case "Plasma":
        plasma++;
        break;
    }
  });

  return (
    <>
      <h3>
        Elements by phase (aight there aint no plasma that doesnt exist??/)
      </h3>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: gas, label: "Gas" },
              { id: 1, value: solid, label: "Solid" },
              { id: 2, value: liquid, label: "Liquid" },
              { id: 3, value: plasma, label: "Plasma" },
            ],
          },
        ]}
        width={800}
        height={400}
      />
    </>
  );
}
