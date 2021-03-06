import styles from '../../styles/Userform.module.css';
import { Formik, Form } from "formik";
import { Grid, TextField, Button, Typography, Stack } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import CNav from '../../components/Nav/Nav';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function UserForm() {
  const { t } = useTranslation('common');

  const router = useRouter();

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
      <Head>
        <title>Contact Details</title>
        <meta name="description" content="Reservation module" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/static/CamperLinkNav.module.css" />
      </Head>
      <CNav />

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
          <Typography variant='h5' className='bold mt0'>Enter your contact details to complete your reservation</Typography>
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

                <label htmlFor="name">{t('Full Name')}*</label>
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
                  onClick={() => router.push("/pricing-overview")}
                  color={'success'}
                  variant='contained'
                  fullWidth
                >Submit</Button>
                {/* <Button
                  // onClick={() => router.push("/userform")}
                  color={'success'}
                  variant='contained'
                >Register</Button>
                <Typography variant='subtitle2' className='bold'>Already have an account?</Typography>
                <Button
                  // onClick={() => router.push("/userform")}
                  color={'info'}
                >Login</Button> */}
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}