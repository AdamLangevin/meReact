import faker from 'faker';
import React from 'react';
import {Button, Header, Placeholder, Popup} from 'semantic-ui-react';
import './pop-icon.css';
import { Newsbtn } from '../newsbtn/newsbtn';

/* eslint-disable-next-line */
export interface PopIconProps {}

export const PopIcon = (props: PopIconProps) => {
  const [data, setData] = React.useState(null);
  const timer = React.useRef();

  return (
    <div className='popUp'>
      <Popup on='click' 
              onClose={() => { 
                            setData(null); clearTimeout(timer.current)
                          }
                        }
              onOpen={() => {
                            setData(null); 
                            // timer.current = setTimeout(() => { 
                            //               setData({
                            //                 description: faker.lorem.sentances(5),
                            //                 name: faker.name.firstName(),
                            //                 title: faker.name.title(),
                            //               })
                            //             }, 1500)
                            }
              }popperDependencies={[!!data]} trigger={<Button className='btn' content='HN'/>} >
                { (
                  <div className='placeHolder'>
                    <Newsbtn />
                  </div>
                )}
      </Popup>
    </div>
  );
};

export default PopIcon;
