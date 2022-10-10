import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';

import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../../components/AlertBanner';

function Options( {optionType }) {

  //prop will be either 'scoops' or 'toppings'

  const [ items, setItems ] = useState([]);
  const [ error, setError ] = useState(false);

  useEffect(() => {
      const getData = async (optionType) => {
        try {
          const res = await fetch(`http://localhost:3030/${optionType}`);
          const results = await res.json();
          setItems(results);
        } catch (error) {
          console.log(`Error fetching items: ${error.message}`);
          setError(true);
        }
      }
      getData(optionType);
  }, [optionType]);

  if(error) {
    return <AlertBanner />
  }


  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionItems = items.map((item) => <ItemComponent key={item.name} name={item.name} imagePath={item.imagePath}/>);
  
  return (
      <Row>{optionItems}</Row>
  )
}

export default Options
