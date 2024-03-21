import { useEffect } from 'react'
import TopBar from "../Components/TopBar"
import ProductTable from '../Components/ProductTable'
import FormProduct from '../Components/FormProduct'
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import UpdateProductForm from "../Components/UpdateProductForm"

import { useNavigate } from 'react-router-dom';

export interface List {
  id?: string;
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  OwnerName: string;
  email: string;
  phone: number;
  description: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 550,
  bgcolor: 'background.paper',
  border: '2px solid ',
  boxShadow: 24,
  p: 4,
};



export default function ProductDashBoard() {
  const [data, setData] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [rows, setRows] = useState([]);
  const [Update, setUpdate] = useState<List>(rows[0]);
  const [UpdateFrom, setUpdateFrom] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = () => {
      let rowsString = localStorage.getItem("ProductArray") || "No Data in the DataBase";
      if (rowsString === "No Data in the DataBase") {
        setData(false);
      } else {
        setRows(JSON.parse(rowsString));
        setData(false);
      }
    }
    getData();
  }, [data]);


  const HandelAdd = (values: List) => {
    let PreviousData = localStorage.getItem("ProductArray")
    if (PreviousData === null || PreviousData.trim() === "") {
      const inputId = crypto.randomUUID();
      values.id = inputId
      let DataProcess: List[] = [];
      DataProcess.push(values);
      let UpdatedData = JSON.stringify(DataProcess)
      localStorage.setItem("ProductArray", UpdatedData)
      console.log(UpdatedData);
      setData(true);
    } else {
      let DataProcess: List[] = JSON.parse(PreviousData);
      const inputId = crypto.randomUUID();
      values.id = inputId
      DataProcess.push(values);
      let UpdatedData = JSON.stringify(DataProcess)
      localStorage.setItem("ProductArray", UpdatedData)
      setData(true);
    }
  }

  const HandelDelete = (values: List) => {
    let PreviousData = localStorage.getItem("ProductArray")
    if (PreviousData !== null && PreviousData.trim() !== "") {
      let DataProcess: List[] = JSON.parse(PreviousData);
      const a = values.id
      const delData = DataProcess.findIndex(obj => obj.id === a)
      DataProcess.splice(1, delData)
      let UpdatedData = JSON.stringify(DataProcess)
      localStorage.setItem("ProductArray", UpdatedData)
      setData(true);
    }
  }

  const HandelUpdateData = (values: List) => {
    setUpdateFrom(true);
    setUpdate(values);
    handleOpen();
  }

  const HandelUpdate = (values: List) => {
    let PreviousData = localStorage.getItem("ProductArray")
    if (PreviousData !== null && PreviousData.trim() !== "") {
      let DataProcess: List[] = JSON.parse(PreviousData);
      const a = values.id
      const UpData = DataProcess.findIndex(obj => obj.id === a)
      DataProcess[UpData] = values
      let UpdatedData = JSON.stringify(DataProcess)
      localStorage.setItem("ProductArray", UpdatedData)
      setData(true);
    }
  }

  const HandelProduct = (values: List) => {
    navigate(`/ProductDashboard/${values.id}`)
  }

  return (
    <div>
      <TopBar value={"Product DashBoard"} />
      {/* Add Shop Button */}
      <div className="w-full flex justify-end pt-4 pb-4 pr-6 border">
        <div>
          <Button onClick={handleOpen} variant="contained">Add Product</Button>
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <FormProduct onAdd={HandelAdd} />
            </Box>
          </Modal>
        </div>
      </div>
      {/* UPdate From */}
      {
        UpdateFrom === true && <div >
          <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <UpdateProductForm onUpdate={HandelUpdate} Shop={Update} />
              </Box>
            </Modal>
          </div>
        </div>
      }
      {/* Shop table */}
      {rows !== null && <ProductTable rows={rows} onDelete={HandelDelete} onUpdate={HandelUpdateData} onProduct={HandelProduct} />}
    </div>
  );
}
