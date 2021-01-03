import React, { useEffect } from 'react'
import { createIframeClient } from '@remixproject/plugin';
import parser from '@solidity-parser/parser';
import { convertUmlClassesToSvg } from 'sol2uml';
import { convertNodeToUmlClass } from 'sol2uml/lib/parser';
import { useState } from 'react';
import Viewer from 'react-viewer';

import './App.css';

function App() {
  console.debug('Plugin: remix-sol2uml: starting');

  const [client, setClient] = React.useState(null)
  const [svg, setSvg] = useState();
  
  useEffect(() => {
    async function init() {
      if (!client) {
        setClient(createIframeClient());
      } else {
        await client.onload();
        console.debug('Plugin: remix-sol2uml: remix client loaded');

        client.on('solidity', 'compilationFinished', async (target, source) => {
          console.debug('Plugin: remix-sol2uml: compilationFinished');

          const ast = parser.parse(source.sources[target].content);
          console.debug('Plugin: remix-sol2uml: AST', ast);
          
          const umlClass = convertNodeToUmlClass(ast, target)
          const solSvg = await convertUmlClassesToSvg(umlClass);
          setSvg(solSvg.substr(solSvg.indexOf('<svg ')));
        });
      }
    }
    init();
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <Viewer
          visible={true}
          rotatable={false}
          loop={false}
          noClose={true}
          noFooter={true}
          showTotal={false}
          changeable={false}
          zoomSpeed={0.2}
          minScale={1}
          images={[{src: `data:image/svg+xml;base64,${btoa(svg)}`}]} />
      </header>
    </div>
  );
}

export default App;
