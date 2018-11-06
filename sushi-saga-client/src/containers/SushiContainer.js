import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

import Sushi from '../components/Sushi'

const SushiContainer = (props) => {


  return (
    <Fragment>
      <div className="belt">
        {props.sushi.map((sushi, idx) => <Sushi key={idx} sushi={sushi} eatSushi={props.eatSushi} eaten={props.eatenSushi.includes(sushi)} /> )}
        <MoreButton handleClick={props.handleClick} />
      </div>
    </Fragment>
    
  )
}

export default SushiContainer