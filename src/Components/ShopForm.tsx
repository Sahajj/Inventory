import { Button, createTheme, FormControl, Grid, InputLabel, MenuItem, Select, TextField, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import {List} from "../Pages/ShopDashboard"
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

interface Address {
    Country: string;
    states: string[];
    cities: { [state: string]: string[] };
    postalCode?: number;
    street?: string;
}

const countries: Address[] = [
    {
        Country: "USA",
        states: ["New York", "California", "Texas"],
        cities: {
            "New York": ["New York City", "Buffalo"],
            "California": ["Los Angeles", "San Francisco"],
            "Texas": ["Houston", "Austin"]
        }
    },
    {
        Country: "India",
        states: ["Delhi", "Maharashtra", "Karnataka"],
        cities: {
            "Delhi": ["New Delhi"],
            "Maharashtra": ["Mumbai City"],
            "Karnataka": ["Bengaluru"]
        }
    },
    {
        Country: "Germany",
        states: ["Berlin", "Munich", "Frankfurt"],
        cities: {
            "Berlin": ["Berlin City"],
            "Munich": ["Munich City"],
            "Frankfurt": ["Frankfurt City"]
        }
    }
];



interface AddItemFromProps {
    onAdd: (item: List) => void;
}

const AddShopForm: React.FC<AddItemFromProps> = ({ onAdd }) => {
    const [values, setValues] = useState<List>({
        name: "",
        address: {
            street: "",
            city: "",
            state: "",
            postalCode: "",
            country: ""
        },
        owner: "",
        email: "",
        phone: NaN,
        description: ""
    });

    const handelInputChange = (e: any) => {
        const { name, value } = e.target;
        if (name && name.startsWith("Address.")) {
            const addressProp = name.split(".")[1];
            setValues({
                ...values,
                address: {
                    ...values.address,
                    [addressProp]: value
                }
            });
        } else {
            setValues({
                ...values,
                [name || '']: value // Default to empty string
            });
        }
    };

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAdd(values); // No need for curly braces around values
        setValues({
            name: "",
            address: {
                street: "",
                city: "",
                state: "",
                postalCode: "",
                country: ""
            },
            owner: "",
            email: "",
            phone: NaN,
            description: ""
        });
    }

    return (
        <form onSubmit={handelSubmit}>
            <ThemeProvider theme={theme}  >
                <Grid container spacing={4} direction="row" alignItems="center" justifyContent="center">
                    <Grid item xs={6}>
                        <TextField variant="outlined" label="Shop Name" name="name" value={values.name} onChange={handelInputChange} />
                        <TextField variant="outlined" label="Owner Name" name="owner" value={values.owner} onChange={handelInputChange} />
                        <TextField variant="outlined" type='number' label="Phone" name="phone" value={values.phone} onChange={handelInputChange} />
                        <TextField variant="outlined" label="Email" name="email" value={values.email} onChange={handelInputChange} />
                        <TextField variant="outlined" label="Description" name="description" value={values.description} onChange={handelInputChange} />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth sx={{ margin: '8px' }}>
                            <InputLabel id="country-label">Country</InputLabel>
                            <Select
                                labelId="country-label"
                                id="country"
                                value={values.address.country}
                                label="Country"
                                name="Address.country"
                                onChange={handelInputChange}
                                sx={{ width: '80%' }}
                            >
                                {countries.map(country => (
                                    <MenuItem key={country.Country} value={country.Country}>{country.Country}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* State Select */}
                        <FormControl fullWidth sx={{ margin: '8px' }}>
                            <InputLabel id="state-label">State</InputLabel>
                            <Select
                                labelId="state-label"
                                id="state"
                                value={values.address.state}
                                label="State"
                                name="Address.state"
                                onChange={handelInputChange}
                                sx={{ width: '80%' }}
                            >
                                {countries.find(country => country.Country === values.address.country)?.states.map(state => (
                                    <MenuItem key={state} value={state}>{state}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* City Select */}
                        <FormControl fullWidth sx={{ margin: '8px' }}>
                            <InputLabel id="city-label">City</InputLabel>
                            <Select
                                labelId="city-label"
                                id="city"
                                value={values.address.city}
                                label="City"
                                name="Address.city"
                                onChange={handelInputChange}
                                sx={{ width: '80%' }}
                            >
                                {countries.find(country => country.Country === values.address.country)?.cities[values.address.state]?.map(cities => (
                                    <MenuItem key={cities} value={cities}>{cities}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <TextField variant="outlined" label="Street" name="Address.street" value={values.address.street} onChange={handelInputChange} />
                        <TextField variant="outlined" label="Postal Code" name="Address.postalCode" value={values.address.postalCode} onChange={handelInputChange} />
                    </Grid>
                    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "25vh" }} >
                        <Button variant="contained" type="submit">
                            Add Shop
                        </Button>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </form>

    )
}

export default AddShopForm;