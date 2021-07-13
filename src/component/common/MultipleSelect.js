import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 130,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  export default function SimpleSelect() {
    const classes = useStyles();
    const [inputs, setInputs] = React.useState({
        business : '',
        portfolio : ''
    })

    const { business, portfolio } = inputs;

    const handleChange = (e) => {
        debugger
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name] : value
        })
    };
  
    return (
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel >사업영역</InputLabel>
          <Select
            id="Business"
            value={business}
            onChange={handleChange}
            name="business"
            label="Business"
          >
            <MenuItem value={'B2B'}>B2B</MenuItem>
            <MenuItem value={'B2C'}>B2C</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel >포트폴리오</InputLabel>
          <Select
            id="Portfolio"
            value={portfolio}
            onChange={handleChange}
            name="portfolio"
            label="Portfolio"
          >
            <MenuItem value={'드라이브쓰루'}>드라이브쓰루</MenuItem>
            <MenuItem value={'무인매장'}>무인매장</MenuItem>
            <MenuItem value={'전자상거래'}>전자상거래</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }