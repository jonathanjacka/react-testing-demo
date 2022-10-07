import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import ScoopOption from './ScoopOption';

function Options( {optionType }) {

  //prop will be either 'scoops' or 'toppings'

  const [ items, setItems ] = useState([]);

  useEffect(() => {
      const getData = async (optionType) => {
        try {
          const res = await fetch(`http://localhost:3030/${optionType}`);
          const results = await res.json();
          setItems(results);
        } catch (error) {
          //TODO: Handle error fully
          console.log(`Error fetching items: ${error.message}`);
        }
      }
      getData(optionType);
  }, [optionType]);

  //TODO: replace with topping option when available
  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map((item) => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath}/>);
  
  return (
      <Row>{optionItems}</Row>
  )
}

export default Options
