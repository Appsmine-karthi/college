import React, { useState } from "react";
import "../../App.css";
import LineChart from "./Chart/LineChart";

function Line() {
  const [data, setData] = useState(
    Array.from({ length: 100 }, () => Math.round(Math.random() * 100))
  );

  // const data = [1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002 , 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]

  console.log(`data - ${ JSON.stringify(data) }`)

  return <LineChart data={data} />;
}

export default Line;