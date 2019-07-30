import React from 'react'
import { Button, Grid, Popup, Input } from 'semantic-ui-react'


const PopupExampleNested = () => (
  <Popup wide trigger={<Button content='Start Here' />} on='click'>
    <div>
      How many seconds between prompts?
    </div>
    <Input
                    // onChange={this.search}
                    className='search'
                    size='large'
                    icon='bolt'
                    placeholder='Type Number Here'
                />
  </Popup>
)

export default PopupExampleNested
