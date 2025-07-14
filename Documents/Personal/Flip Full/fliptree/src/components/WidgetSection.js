import React,{useEffect, useState} from 'react'
import WidgetCard from './WidgetCard'
import Shimmer from './Shimmer';

const WidgetSection = () => {

  const [plants, setPlants] = useState([]);

  useEffect(()=>{
      getPlants();
  },[])

  async function getPlants() {
      const data = await fetch('https://perenual.com/api/species-list?key=sk-GozY673895bc64c4b7656')
      const json = await data.json();
      setPlants(json);
  }

  if(plants?.length===0)
    return < Shimmer/>;
  return (
    <div>
      <WidgetCard info = {plants} name="New Arrivals"/>
    </div>
  )
}

export default WidgetSection
