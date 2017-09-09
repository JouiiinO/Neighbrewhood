import React from 'react';
import Svg, { G, Polygon } from 'react-native-svg';

const Ico_close = () => {
  return (
    <Svg width="24" height="24">
    	<G id="close" fill="#fff">
    		<Polygon id="x" style="fill-rule:evenodd;clip-rule:evenodd;" points="18.717,6.697 17.303,5.283 12,10.586 6.697,5.283    5.283,6.697 10.586,12 5.283,17.303 6.697,18.717 12,13.414 17.303,18.717 18.717,17.303 13.414,12   "/>
    	</G>
    </Svg>
  );
}

export default Ico_close ;
