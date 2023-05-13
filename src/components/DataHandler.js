import { useState } from "react";
import axios from "axios";

function DataHandler({ children }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "https://www.terriblytinytales.com/test.txt"
    );
    const text = response.data;
    const words = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .split(/\s+/);
    const frequency = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    const sorted = Object.keys(frequency).sort(
      (a, b) => frequency[b] - frequency[a]
    );
    const top20 = sorted.slice(0, 20);
    const histogram = top20.map((word) => ({
      word,
      frequency: frequency[word],
    }));
    setData(histogram);
    setIsLoading(false);
  };

  const handleExport = () => {
    const csv = data.map((row) => `${row.word},${row.frequency}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "histogram.csv";
    link.href = url;
    link.click();
  };

  return children({ isLoading, data, fetchData, handleExport });
}

export default DataHandler;