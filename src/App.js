import React, { useEffect, useState } from 'react'

const App = () => {
  //Store tha API Data in a variable to render in our Component
  const [data, setData] = useState([]);

  //we can fetch the API by UseEffect
  useEffect(() => {
    fetch('https://data.covid19india.org/data.json').then(
      res => res.json()
    ).then(jsondata => setData(jsondata.statewise))
  }, [])
  return (
    <div className='container shadow mt-3'>
      <center>
        <h2 className='p-1'>INDIA COVID-19 DASHBOARD</h2>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>LastUpdate</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item, index) => {
              // whatever you are trying to taken data from api , we have hydrate the data by map and then return in our component
              return (
                <tr key={index}>
                  <td>{item.state}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.recovered}</td>
                  <td>{item.deaths}</td>
                  <td>{item.active}</td>
                  <td>{item.lastupdatedtime}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default App

{/*     Calling an API and getting a data both are interlinked ,
    If your calling an any api using fetch(get method) it will get some data and return it.
    Returned data we can store it in a variable and use it for later usage.
    In this whole process of calling and getting api data useEffect doesn't involve.
    useEffect is an cleanup function, If you need to perform any action instantly after render, there you can use useEffect(). */ }