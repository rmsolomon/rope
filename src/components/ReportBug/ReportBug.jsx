import React from 'react'
import { Button, Typography, MenuItem, TextField, Container } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import useStyles from './styles';

const locations = [
    {
        value: 'Home Page',
        label: 'Home Page',
    },
    {
        value: 'Product Page',
        label: 'Product Page',
    },
    {
        value: 'Cart Page',
        label: 'Cart Page',
    },
    {
        value: 'Checkout Page',
        label: 'Checkout Page',
    },
    {
        value: 'Other...',
        label: 'Other...',
    },
]

const ReportBug = () => {
    const classes = useStyles();
    const [name, setName ] = React.useState('');
    const [location, setLocation ] = React.useState('');
    const [message, setMessage ] = React.useState('');

    const handleChange = (event) => {
        setLocation(event.target.value);
      };

    function handleSubmit(event) {
        event.preventDefault();
        console.log( 'Name:', name, ",", 'Location:', location, ",", 'Message:', message );
    }

    // function handleAlert(event) {
    //     alert('Success!')
    // } 
    
return (
    <form className={classes.root} onSubmit={handleSubmit}>
        <Container className={classes.container}>
        <Typography className={classes.title} variant="h4">Report Bug</Typography>
                <TextField 
                className={classes.form}
                label="Name" 
                onInput={ e=>setName(e.target.value)}
                >
                </TextField>
            <div className={classes.dropdown}>
                <TextField
                    id="standard-select"
                    select
                    label="Location"
                    value={location}
                    onChange={handleChange}
                    helperText="Please select the page your bug is located on">
                    {locations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
                <TextField 
                    className={classes.input} 
                    id="standard-multiline-flexible"
                    label="Your message" 
                    variant="outlined"
                    multiline
                    rowsMax={8}
                    required
                    type="text"
                    onInput={ e=>setMessage(e.target.value)}
                />
                <Button 
                className={classes.button} 
                type="submit" 
                variant="contained" 
                color="primary"
                >
                Submit
                </Button>
            </Container>
        </form>
    )
}

export default ReportBug
