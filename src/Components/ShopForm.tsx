import { useState, useEffect } from 'react';
import { Grid, TextField } from '@mui/material';
import { createTheme, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
interface List {
    id: number,
    name: string,
    Address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
    },
    owner: string,
    email: string,
    phone: number,
    description?: string
}
const theme = createTheme({
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: "80%",
                    margin: "8px",
                },
            },
        },
    },
})

export default function ShopForm() {
    const [values, setValues] = useState({
        name: "",
        Address: {
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: ""
        },
        owner: "",
        email: "",
        phone: null,
        description: ""
    });

    const handelInputChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    useEffect(() => {

    }, [values])
    return (
        <ThemeProvider theme={theme}>
            <form>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <TextField variant="outlined" label="Shop Name" name="name" value={values.name} onChange={handelInputChange} />
                        <TextField variant="outlined" label="Owner Name" name="owner" value={values.owner} onChange={handelInputChange} />
                        <TextField variant="outlined" type='number' label="Phone" name="phone" value={values.phone} onChange={handelInputChange} />
                        <TextField variant="outlined" label="Email" name="email" value={values.email} onChange={handelInputChange} />
                        <TextField variant="outlined" label="Description" name="description" value={values.description} onChange={handelInputChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth sx={{ margin: '8px' }}>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.Address.country}
                                label="Country"
                                onChange={handelInputChange}
                                sx={{ width: '80%' }}
                            >
                                <MenuItem value={"Usa"}>USA</MenuItem>
                                <MenuItem value={"India"}>India</MenuItem>
                                <MenuItem value={"Germany"}>Germany</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '8px' }}>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.Address.state}
                                label="State"
                                onChange={handelInputChange}
                                sx={{ width: '80%' }}
                            >
                                <MenuItem value={"Usa"}>USA</MenuItem>
                                <MenuItem value={"India"}>India</MenuItem>
                                <MenuItem value={"Germany"}>Germany</MenuItem>
                            </Select>
                            
                        </FormControl>

                        <FormControl fullWidth sx={{ margin: '8px' }}>
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={values.Address.city}
                                label="City"
                                onChange={handelInputChange}
                                sx={{ width: '80%' }}
                            >
                                <MenuItem value={"Usa"}>USA</MenuItem>
                                <MenuItem value={"India"}>India</MenuItem>
                                <MenuItem value={"Germany"}>Germany</MenuItem>
                            </Select>
                            
                        </FormControl>

                        <TextField variant="outlined" label="Street" name="street" value={values.Address.street} onChange={handelInputChange} />
                        <TextField variant="outlined" label="postalCode" name="postalCode" value={values.Address.postalCode} onChange={handelInputChange} />
                    </Grid>
                </Grid>
            </form>
        </ThemeProvider>

    )
}

