import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import styles from '../../styles/Pricing-Overview.module.css';


export default function PricingOverview() {

  return (
    <div id="pricingOverview" className={styles.pricingOverview}>

      <Typography variant='h5' className={styles.pricingOverviewTitle}>Reserveringsinformatie</Typography>

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
                <Typography variant='subtitle1' className='bold'>Subtotaal exclusief btw</Typography>
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

              <Grid mt={2} item xs={1}>
                <Typography variant='subtitle1'></Typography>
              </Grid>
              <Grid mt={2} item xs={5}>
                <Typography variant='subtitle1' className=''></Typography>
              </Grid>
              <Grid mt={2} item xs={3}>
                {/* <Button
                  // onClick={() => router.push("/pricing-overview")}
                  color={'success'}
                  variant='contained'
                >Opslaan</Button> */}
              </Grid>
              <Grid mt={2} item xs={3}>
                <Button
                  // onClick={() => router.push("/pricing-overview")}
                  style={{ marginLeft: -5 }}
                  color={'warning'}
                >Annulleren</Button>
              </Grid>


            </Grid>

          </Stack>

        </div>

      </div>

    </div>
  )
}