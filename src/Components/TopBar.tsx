import { Box, AppBar, Toolbar, Typography  } from "@mui/material";

interface ButtonAppBarProps {
    value: string;
}

export default function TopBar({ value }: ButtonAppBarProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {value}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
