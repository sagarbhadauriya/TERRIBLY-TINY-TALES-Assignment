# FrequentWords

The application is a word frequency counter that extracts the 20 most frequently occurring words from a given text file and displays them in a bar chart. Users can download the data as a CSV file.

## Components

The application consists of three components:

### DataHandler

`DataHandler` component fetches the data from the given text file and processes it to extract the top 20 most frequently occurring words in the file. It uses React hooks to manage state and axios library to make HTTP requests.

### HistogramChart

`HistogramChart` component renders the bar chart using the data passed down from the `DataHandler` component. It uses the `@nivo/bar` library to create the chart.

### App

`App` component is the main component that renders the `DataHandler` and `HistogramChart` components. It also renders buttons to fetch the data and export the data as a CSV.

## Libraries and Plugins

The application uses the following libraries and plugins:

- React
- axios
- @nivo/bar

## Deployment

The application is deployed on Netlify and can be accessed at [frequentwords.netlify.app](https://frequentwords.netlify.app/).

## Screenshots

On first load, only Submit button has displayed:
![image](https://github.com/sagarbhadauriya/TERRIBLY-TINY-TALES-Assignment/assets/72752355/fbc86b29-90f0-4d45-98cd-ae1716931b8c)

On clicking on Submit, the contents of https://www.terriblytinytales.com/test.txt will be fetched and then a histogram of the 20 most occurring words has been plotted:
![image](https://github.com/sagarbhadauriya/TERRIBLY-TINY-TALES-Assignment/assets/72752355/b3060014-70a9-410f-ab97-f188935f7e21)

When user clicked on "Export" button, it will download a CSV file of the histogram data:
![image](https://github.com/sagarbhadauriya/TERRIBLY-TINY-TALES-Assignment/assets/72752355/b9c096c8-926b-4c84-bce3-b7e753c77bd5)

