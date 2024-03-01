import * as React from 'react';
import MenuAppBar from '../Components/AppBar'
import PageHeader from '../Components/PageHeader';
import PeopleOutlineTwoToneIcon from '@mui/icons-material/PeopleOutlineTwoTone';
import Button from '@mui/material/Button';
import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import ListOfShop from "../Components/List"
import AddShopForm from '../Components/ShopForm';
import { useNavigate } from 'react-router-dom';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid ',
    boxShadow: 24,
    p: 4,
};

export interface List {
    id?: number;
    name: string;
    address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    };
    owner: string;
    email: string;
    phone: number;
    description: string;
}

let MainId: number = 3;
const ShopDashboard: React.FC = () => {
    const [mainList, setMainList] = useState<List[]>([
        {
            id: 1,
            name: "Fashion Hub",
            address: {
                street: "456 Fashion Ave",
                city: "Metropolis",
                state: "Fashion State",
                postalCode: "54321",
                country: "Fashionland"
            },
            owner: "Alice Smith",
            email: "fashionhub@example.com",
            phone: 9876543210,
            description: "Your one-stop shop for the latest fashion trends."
        },
        {
            id: 2,
            name: "Tech Haven",
            address: {
                street: "789 Tech Blvd",
                city: "Techville",
                state: "Tech State",
                postalCode: "67890",
                country: "Techland"
            },
            owner: "Bob Johnson",
            email: "techhaven@example.com",
            phone: 1112223333,
            description: "Your go-to destination for all things tech."
        },
        {
            id: 3,
            name: "Dummy Shop",
            address: {
                street: "123 Main St",
                city: "Dummyville",
                state: "Dummy State",
                postalCode: "12345",
                country: "Dummyland"
            },
            owner: "John Doe",
            email: "dummy@example.com",
            phone: 1234567890,
            description: "This is a dummy shop used for testing purposes."
        },
    ])

    const handelAddData = (item: List) => {
        item.id = ++MainId;
        setMainList(prevList => [...prevList, { ...item }]);
    }
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleEdit = (ListId?: number) => {
        
    }

    const handleDelete = (ListId?: number) => {
        const index = mainList.findIndex((list) => list.id === ListId);
        if (index !== -1) {
            const updatedList = [...mainList]; // Create a copy of the mainList
            updatedList.splice(index, 1); // Remove the item at the found index
            setMainList(updatedList); // Update the state with the modified list
        }
    }
    const handleNavigateToProducts = (ListId?: number) => {
        navigate(`/ProductDashboard/${ListId}`)
    }


    return (
        <>
            <MenuAppBar value={"Shop List"} />
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    <Button onClick={handleOpen} variant="contained"  >Add Shop</Button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <AddShopForm onAdd={handelAddData} />
                        </Box>
                    </Modal >
                </div>
                <div>
                    {/* <PageHeader title={mainList[0].name} icon={<PeopleOutlineTwoToneIcon fontSize="large" style={{ fill: '#3c44b1' }} />} description={mainList[0].description} /> */}
                </div>
            </div>
            <ListOfShop list={mainList}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onNavigateToProducts={handleNavigateToProducts} />
        </>
    );
};

export default ShopDashboard;
