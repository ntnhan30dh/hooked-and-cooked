import React from "react";
import { Button, Modal } from 'semantic-ui-react'
import CountryList from './countrylist'
import orderNow from "../images/orderNowBtn.gif";

const OrderNow = () =>{
  const [open, setOpen] = React.useState(false)
  return (
   

      <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button  >
      <div className="w-20 sm:w-28 md:w-32 lg:w-48 ">
        
          <img src={orderNow} alt="orderNow" />
       
      </div>
        </Button>}
        
    >
      <Modal.Header>Please select the country</Modal.Header>
      <Modal.Content >
        <Modal.Description>
        </Modal.Description>
        <CountryList/>
      </Modal.Content>
    </Modal>
  );
}

export default OrderNow;
