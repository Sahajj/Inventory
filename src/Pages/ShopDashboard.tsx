import * as React from 'react';
import MenuAppBar from '../Components/AppBar'
import ListOfItems from '../Components/List'
import PageHeader from '../Components/PageHeader';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
const ShopDashboard: React.FC = () => {
    return (
        <>
         <MenuAppBar value={"Shop List"} value2={"Add Shop"}/>
         <PageHeader title={"Keshu Ki tapri"} icon={<PeopleOutlineTwoToneIcon fontSize="large" style={{ fill: '#3c44b1' }}/>} description={"Apni chai sab ko bhayee"}/>
         <ListOfItems />
        </>
    );
};

export default ShopDashboard;
