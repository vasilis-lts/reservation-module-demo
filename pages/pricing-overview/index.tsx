import React from 'react';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import Head from 'next/head';
import CNav from '../../components/Nav/Nav';
import styles from '../../styles/Pricing-Overview.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PricingOverview() {
  const { t } = useTranslation('common');
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div id="pricingOverview" className={styles.pricingOverview}>
      <Head>
        <title>Confirmation of Reservation</title>
        <meta name="description" content="Reservation module" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/static/CamperLinkNav.module.css" />
      </Head>
      <CNav />

      <Typography variant='h5' className={styles.pricingOverviewTitle}>{t("Reservation Confirmation")}</Typography>

      <div className={styles.pricingOverviewContent}>

        <div className={styles.pricingOverviewContentLeft}>
          <Stack
            direction="column"
            justifyContent="flex-start"
            spacing={0}
            mt={2}
            mb={2}
          >
            <Typography variant='subtitle1' className={styles.pricingContentTitle}>Locatie</Typography>
            <Typography variant='h5' mt={1} className='bold'>Camperplaats Hiensch</Typography>
            <Typography variant='subtitle1' style={{ lineHeight: 1.4 }}>vrouwenweg 8, 3864DZ, nijkerkerveen 06 51558872</Typography>

          </Stack>

          <Stack
            direction="column"
            justifyContent="flex-start"
            spacing={3}
            mb={2}
            mt={2}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className='w100'
            >
              <Typography variant='subtitle1' className='gray bold'>Aankomst</Typography>
              <Typography variant='subtitle1' className='bold'>13 januari 2002</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className='w100'
            >
              <Typography variant='subtitle1' className='gray bold'>Vertrek</Typography>
              <Typography variant='subtitle1' className='bold'>14 januari 2002</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className='w100'
            >
              <Typography variant='subtitle1' className='gray bold'>Status</Typography>
              <Typography variant='subtitle1' className='blue bold'>
                <ul style={{ margin: 0 }}><li>Aanvraag</li></ul>
              </Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              className='w100'
            >
              <Typography variant='subtitle1' className='gray bold'>Betaald</Typography>
              <Typography variant='subtitle1' className='bold'>Nee</Typography>
            </Stack>

            <Button
              // onClick={() => router.push("/pricing-overview")}
              color={'success'}
              variant='contained'
              size='large'
              fullWidth
            >Navigeer naar locatie</Button>
          </Stack>
        </div>

        <div className={styles.pricingOverviewContentRight}>

          <Stack
            direction="column"
            justifyContent="flex-start"
            spacing={2}
            mt={2}
            mb={2}
          >
            <Typography variant='subtitle1' className={styles.pricingContentTitle}>Reservering</Typography>

            <Grid container spacing={1}>
              <Grid item xs={1}>
                <Typography variant='subtitle1'></Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='subtitle1' className='bold'>Omschrijving</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className='bold'>Per nacht</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className='bold'>Totaal</Typography>
              </Grid>


              <Grid item xs={1}>
                <Typography variant='subtitle1'>1x</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='subtitle1' className=''>Overnachting</Typography>
                <Typography variant='subtitle1' className='gray'>Inclusief extra voertuig, internet/wifi, toilet, honden</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className=''></Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className=''>€ 12,00</Typography>
              </Grid>

              <Grid item xs={1}>
                <Typography variant='subtitle1'>2x</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='subtitle1' className=''>Personnen</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className=''>€ 0,00</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className=''>€ 0,00</Typography>
              </Grid>

              <Grid item xs={1}>
                <Typography variant='subtitle1'>1x</Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='subtitle1' className=''>Waserette</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className=''>€ 2,50</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className=''>€ 2,50</Typography>
              </Grid>

              <Grid mt={2} item xs={1}>
                <Typography variant='subtitle1'></Typography>
              </Grid>
              <Grid mt={2} item xs={5}>
                <Typography variant='subtitle1' className=''></Typography>
              </Grid>
              <Grid mt={2} item xs={3}>
                <Typography variant='subtitle1' className='bold'>Subtotaal (exclusief btw)</Typography>
              </Grid>
              <Grid mt={2} item xs={3}>
                <Typography variant='subtitle1' className='bold'>€ 13,30</Typography>
              </Grid>

              <Grid item xs={1}>
                <Typography variant='subtitle1'></Typography>
              </Grid>
              <Grid item xs={5}>
                <Typography variant='subtitle1' className=''></Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className=''>9% btw</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant='subtitle1' className=''>€ 1,20</Typography>
              </Grid>

              <Grid mt={2} item xs={1}>
                <Typography variant='subtitle1'></Typography>
              </Grid>
              <Grid mt={2} item xs={5}>
                <Typography variant='subtitle1' className=''></Typography>
              </Grid>
              <Grid mt={2} item xs={3}>
                <Typography variant='subtitle1' className='bold'>Totaal</Typography>
              </Grid>
              <Grid mt={2} item xs={3}>
                <Typography variant='subtitle1' className='bold'>€ 14,50</Typography>
              </Grid>

            </Grid>

            <div className={styles.reservationBtnActions}>
              <Button
                size='large'
                onClick={() => router.push("/reservation?locationId=1")}
                variant='contained'
                style={{ backgroundColor: "#ccc", color: "#222" }}
              >Cancel, Go back</Button>
              <Button
                onClick={handleClick}
                size='large'
                color={'success'}
                variant='contained'
              >Confirm & Pay</Button>
            </div>

          </Stack>

        </div>

      </div>

      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        style={{ maxWidth: 500 }}
        onClose={handleClose}
        key={'top' + 'right'}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Jouw aanvraag is succesvol verstuurd, je ontvangt een email wanneer jouw reservering definitief is goedgekeurd door de [campsitename] op [mail adres].
        </Alert>
      </Snackbar>

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