// Importing required Material UI components

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Display component for the calculator screen

export default function CalculatorDisplay({ text = "Displaying..." }) {
    return (

        // Card component for styling the display area
        <Card sx={{ minWidth: 250, maxWidth: 390, height: 55, m: 1, marginBottom: 3 }}>
            <CardContent>

                {/* Typography component for displaying the passed 'text' prop */}
                <Typography variant="h6" sx={{ display: "flex", justifyContent: "flex-end", marginTop: -1.9, fontSize: 35 }}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};