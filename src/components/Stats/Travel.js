import React from 'react';
import { VectorMap } from 'react-jvectormap';
import mapData from '../../data/stats/countries';

// References: https://github.com/Allegra9/custom-world-map/blob/master/src/components/map.js
// and https://allegra9.medium.com/react-world-map-75aceda9cc48

const Map = () => (
  <div style={{ width: 512, height: 512 }}>
    <VectorMap
      map="world_mill"
      backgroundColor="transparent" // change it to ocean blue: #0077be
      zoomOnScroll
      containerStyle={{
        width: '100%',
        height: '100%',
      }}
      containerClassName="map"
      regionStyle={{
        initial: {
          fill: '#e4e4e4',
          'fill-opacity': 0.9,
          stroke: 'none',
          'stroke-width': 0,
          'stroke-opacity': 0,
        },
        hover: {
          'fill-opacity': 0.8,
          cursor: 'pointer',
        },
        selectedHover: {},
      }}
      regionsSelectable={false}
      series={{
        regions: [
          {
            values: mapData, // this is your data
            scale: ['#000000', '#2938bc'], // your color game's here
            normalizeFunction: 'polynomial',
          },
        ],
      }}
    />
  </div>
);

export default Map;
