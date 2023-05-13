import React from "react";
import HistogramChart from "./components/HistogramChart";
import DataHandler from "./components/DataHandler";
import "./App.css";

function App() {
  return (
      <DataHandler>
        {({ isLoading, data, fetchData, handleExport }) => (
          <div className="container">
            <div className="button-container">
              <button className="button" onClick={fetchData}>Submit</button>
              {data.length > 0 && (<button className="button" onClick={handleExport}>Export</button>)}
            </div>
            {isLoading ? (<div className="loading">Loading...</div>) : data.length > 0 ? ( <HistogramChart data={data} />) : null}
          </div>
        )}
      </DataHandler>
  );
}

export default App;