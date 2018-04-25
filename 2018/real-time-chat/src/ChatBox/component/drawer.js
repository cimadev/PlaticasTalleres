import React from 'react'
import Drawer from 'react-motion-drawer'

const style = {
  backgroundColor: 'white'
}

const DrawerApp = (props) => (
  <div>
    <Drawer width={200} open={props.open} onChange={open => props.handleClose(open)} right drawerStyle={style}>
      {
        props.users.map((username, key) => {
          return (
            <li className='list-group-item' key={key}>{username}</li>
          )
        })
      }
    </Drawer>
    <style jsx>{`
      .row-wrapper {
        margin-left: 15px;
        margin-right: 15px;
      }
      @media only screen and (min-width: 800px) {
          .row-wrapper {
              margin-left: 135px;
              margin-right: 135px;
          }
      }
      .list-group-item {
        position: relative;
        display: block;
        padding: .75rem 1.25rem;
        margin-bottom: -1px;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.125);
      }

      .list-group-item:hover {
        z-index: 1;
        text-decoration: none;
      }
    `}
    </style>
  </div>
)

export default DrawerApp
