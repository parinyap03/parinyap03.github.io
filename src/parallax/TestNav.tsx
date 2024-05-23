
import {  Element } from 'react-scroll';

const TestNav = () => {
  return (
    <>
       <Element name="test1" className="element">
      test 1
    </Element>
    <Element name="test2" className="element">
      test 2
    </Element>
    <div id="anchor" className="element">
      test 6 (anchor)
    </div>
    </>
  )
}

export default TestNav
