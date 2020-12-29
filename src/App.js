import { createClient } from '@remixproject/plugin-iframe';
import parser from '@solidity-parser/parser';
import { convertUmlClassesToSvg } from 'sol2uml';
import { convertNodeToUmlClass } from 'sol2uml/lib/parser';
import { useState } from 'react';
import Viewer from 'react-viewer';

import './App.css';

function App() {
  const client = createClient();
  const [svg, setSvg] = useState();
  
  client.onload(() => {
    client.on('solidity', 'compilationFinished', async (target, source) => {
      const ast = parser.parse(source.sources[target].content);
      console.log(ast);
      const umlClass = convertNodeToUmlClass(ast, target)
      const solSvg = await convertUmlClassesToSvg(umlClass);
      setSvg(solSvg.substr(solSvg.indexOf('<svg ')));
    })
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
