import faker from 'faker';
import React from 'react';
import {Button, Header, Placeholder, Popup} from 'semantic-ui-react';
import './pop-icon.css';

/* eslint-disable-next-line */
export interface PopIconProps {}

export const PopIcon = (props: PopIconProps) => {
  const [data, setData] = React.useState(null);
  const timer = React.useRef();

  return (
    <Popup on='click' 
            onClose={() => { 
                          setData(null); clearTimeout(timer.current)
                        }
                      }
            onOpen={() => {
                          setData(null); 
                          timer.current = setTimeout(() => { 
                                        setData({
                                          description: faker.lorem.sentances(5),
                                          name: faker.name.firstName(),
                                          title: faker.name.title(),
                                        })
                                      }, 1500)
                          }
                    }popperDependencies={[!!data]} trigger={<Button content='pop'/>} wide>
                      {data === null ? (
                        <Placeholder style={{ minwidth: '200px'}}>
                          <Placeholder.Header>
                          <Placeholder.Line />
                          <Placeholder.Line />
                        </Placeholder.Header>
                        <Placeholder.Paragraph>
                          <Placeholder.Line length='medium' />
                          <Placeholder.Line length='short' />
                        </Placeholder.Paragraph>
                        </Placeholder>
                      ) : (
                        <>
                          <Header as='h2' content={data.name} subheader={data.title} />
                          <p>{data.description}</p>
                        </>
                      )}
    </Popup>
  );
};

export default PopIcon;
