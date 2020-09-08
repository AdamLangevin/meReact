import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import './pngbutton.css';
import test from '../test.png';

/* eslint-disable-next-line */
export interface PngbuttonProps {}
export interface HnAPIProps {}

const hnAPI = (initailUrl, initailData) =>{
  const [data, setData] = useState(initailData);
  const [url, setUrl] = useState(initailUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() =>{
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try{
        const result = await axios(url);

        setData(result.data);
      } catch (error){
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);


  return [{ data, isLoading, isError }, setUrl]
};

export const Pngbutton = (props: PngbuttonProps) => {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, doFetch] = hnAPI('https://hn.algolia.com/api/v1/search?query=redux', { hits:[] });
  return (
    <div>
        <img src={test} />
        {/* <Fragment>
        <form onSubmit={event => {
            doFetch(
              `https://hn.algolia.com/api/v1/search?query=${query}`,
              );
            event.preventDefault();
          }}>
            <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
            <button type="submit">Search</button>
        </form>
        {isError && <div>Something went wrong ...</div>}

        {isLoading ? (
          <div>Loading ...</div>
          ) : (
          <ul>
            {data.hits.map(item => (
              <li key={item.objectID}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>
        )}
      </Fragment> */}
    </div>
  );
};

export default Pngbutton;

