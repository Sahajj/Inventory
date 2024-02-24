import React from 'react';
import MenuAppBar from '../Components/AppBar'
import ListOfItems from '../Components/List'


const ShopDashboard: React.FC = () => {
    return (
        <>
         <MenuAppBar value={"Shop List"} value2={"Add Shop"}/>
         <ListOfItems />
        </>
    );
};

export default ShopDashboard;
