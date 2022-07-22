import React from 'react'
import { Bar as BarChart} from 'react-chartjs'

const BOOKINGS_BUCKETS = {
    Cheap: {
        min: 0,
        max: 100
    },
    Normal: {
        min: 100,
        max: 200
    },
    Expensive: {
        min: 200,
        max: 1000000000
    }
}
var randomColorGenerator = function () { 
  return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};

const BookingsChart = props => {
    const chartData = { labels: [], datasets: [] };
  let values = [];
    for(const bucket in BOOKINGS_BUCKETS){
        const filteredBookingsCount = props.bookings.reduce((prev, current) => {

            if (current.event.price > BOOKINGS_BUCKETS[bucket].min && 
                current.event.price < BOOKINGS_BUCKETS[bucket].max
                ){

           
    return prev + 1;

            } else {
                return prev;
            }
        }, 0)
        values.push(filteredBookingsCount);
        chartData.labels.push(bucket);
        chartData.datasets.push({
          // label: "My First dataset",
          fillColor: randomColorGenerator(),
          strokeColor: randomColorGenerator(),
          highlightFill: randomColorGenerator(),
          highlightStroke: randomColorGenerator(),
          data: values
        });
        values = [...values];
        values[values.length - 1] = 0;
      }
     
    
      return (
        <div style={{ textAlign: 'center' }}>
          <BarChart data={chartData} />
        </div>
      );
    };

export default BookingsChart;