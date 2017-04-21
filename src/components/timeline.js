import React from 'react';


class Timeline extends React.Component {

    render() {
        return (<div>
                  <div className="timeline-item" dateIs={ '20-07-1990' }>
                    <h1>Hello, 'Im a single div responsive timeline without mediaQueries!</h1>
                    <p>
                      I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer
                      on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
                    </p>
                  </div>
                  <div className="timeline-item" dateIs={ '20-07-1990' }>
                    <h1>Oeehhh, that's awesome.. Me too!</h1>
                    <p>
                      I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer
                      on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
                    </p>
                  </div>
                  <div className="timeline-item" dateIs={ '20-07-1990' }>
                    <h1>I'm ::last-child so my border fades ^__^ Or it's supposed to. Still needs fixin....</h1>
                    <p>
                      I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. I write the best placeholder text, and I'm the biggest developer
                      on the web by far... While that's mock-ups and this is politics, are they really so different? I think the only card she has is the Lorem card.
                    </p>
                  </div>
                </div>);
    }
}

export default Timeline;