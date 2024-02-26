import * as React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { createTheme, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material';

interface user {
    title: string,
    icon: any,
    description: string
}

export default function PageHeader(props :user) {

    const theme = createTheme({
        components:{
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: "#fdfdff"
                    }
                }
            }
        }
    })
    return (
   <ThemeProvider theme={theme}>
    <Paper elevation={1} square>
        <div className="p-4 flex mb-2">
            <Card>
                <div className="inline-block p-2 m-3 color-blue-600">
                    {props.icon}
                </div>
            </Card>
            <div className='p-2'>
                <Typography
                 variant="h6"
                 component="div">
                 {props.title}
                </Typography>
                <Typography
                 variant="subtitle2"
                 component="div">
                 {props.description}
                </Typography>
            </div>
        </div>
    </Paper>
    </ThemeProvider>     
    );
}