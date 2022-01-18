import styles from '../../styles/Userform.module.css';
import { Formik, Form } from "formik";
import { Grid, TextField, Button, Typography, Stack } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import { useState } from 'react';

export default function UserForm() {

  const [DefaultValues, setDefaultValues] = useState({
    username: "",
    name: "",
    phone: "",
    licensePlate: ""
  });

  function onSubmit(values) {
    console.log(values);
  }

  function handlePhoneChange(value) {
    if (value) {
      const values = { ...DefaultValues };
      values.phone = value;
      setDefaultValues(values);
    }
  }

  return (
    <div id="UserForm" className={styles.Userform}>
      <div className={styles.formOuter}>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          mt={0}
          mb={2}
          className={styles.userformTitle}>
          <Typography variant='h5' className='bold nanum-title'>That's nice!</Typography>
          <Typography variant='h5' className='bold mt0'>Register your info to complete reservation</Typography>
        </Stack>
        <Formik
          initialValues={DefaultValues}
          onSubmit={values => {
            onSubmit(values);
          }}
          validateOnBlur
          validate={values => {
            const errors = {};
            return errors;
          }}
          render={() => (
            <Form>
              <Grid
                container
                direction="column"
              >

                <label htmlFor="name">Full name*</label>
                <TextField
                  name="name"
                  // placeholder="What is your name?"
                  required
                  data-cy="user-name"
                />
                <label htmlFor="name">E-mail address*</label>
                <TextField
                  name="email"
                  // placeholder="What is your e-mail address?"
                  required
                  data-cy="user-name"
                />

                <label htmlFor="phone">Phone*</label>
                <MuiPhoneNumber
                  name="phone"
                  label="Phone Number"
                  data-cy="user-phone"
                  defaultCountry={"nl"}
                  inputClass='phone-number-input'
                  disableAreaCodes
                  // regions={'europe'}
                  // onlyCountries={['nl', 'de', 'gb', 'fr']}
                  value={DefaultValues.phone}
                  onChange={handlePhoneChange}
                />
                <label htmlFor="licensePlate">License Plate*</label>
                <TextField
                  name="licensePlate"
                  required
                  data-cy="user-licensePlate"
                />

              </Grid>
              <div className={styles.formActions}>
                <Button
                  // onClick={() => router.push("/userform")}
                  color={'success'}
                  variant='contained'
                >Register</Button>
                <Typography variant='subtitle2' className='bold'>Already have an account?</Typography>
                <Button
                  // onClick={() => router.push("/userform")}
                  color={'info'}
                >Login</Button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  )
}