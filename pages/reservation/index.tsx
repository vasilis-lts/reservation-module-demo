import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import nlLocale from 'date-fns/locale/nl';
import { LocalizationProvider } from '@mui/lab';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import styles from '../../styles/Reservation.module.css'

const localeMap = {
  nl: nlLocale,
};

const maskMap = {
  nl: '__/__/____',
};


const Description: NextPage = () => {
  const router = useRouter()
  const { locationid } = router.query;

  const [ArrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [DepartureDate, setDepartureDate] = useState<Date | null>(null);
  const [locale, setLocale] = useState('nl');
  const [PitchSelected, setPitchSelected] = useState<string>("0");

  const handleChange = (event: SelectChangeEvent) => {
    setPitchSelected(event.target.value);
  };



  const location = {
    locationId: 1,
    locationTitle1: "Nijkerkerveen",
    locationTitle2: 'Camping in Nijkerkerveen outskirts',
    description: "Our small-scale camper place is located at our horse stable in Nijkerkerveen. From here you will find beautiful cycling and walking routes. Within cycling distance of Amersfoort, Nijkerk, Bunschoten Spakenburg and Putten. Supermarket, swimming pool and restaurants within cycling distance.<br><br>All facilities available. Good wifi available on the camper pitches."
  }

  useEffect(() => {
    const desc = document.getElementById('description');
    if (desc) {
      desc.innerHTML = location.description
    }

    setArrivalDate(new Date());
  }, []);


  return (
    <div className={styles.reservationContainer}>
      <Head>
        <title>Reservation module</title>
        <meta name="description" content="Reservation module" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack direction={"row"} spacing={1} mt={1} className={styles.reservationContent} >

        <div className="reservation-left">
          <Typography variant='h4' gutterBottom className={styles.reservationTitle}>Camping {location.locationTitle1}</Typography>
          <Image src="/assets/images/camping2.jpg" alt="Camping1" width={900} height={455} />

          <div className="location-details">
            <div className="location-details-left">

              <Typography variant='h6' className='bold nanum-title'>Introduction</Typography>
              <Typography variant='h5' gutterBottom className='bold'>{location.locationTitle2}</Typography>
              <Typography id="description" paragraph align='justify'></Typography>

              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
                mt={3}
                className="basic-costs">

                <Typography variant='h6' className='bold nanum-title'>Good to know</Typography>
                <Typography variant='h5' className='bold mt0'>Location Type</Typography>

                <div className='mt0 flex free-amenities'>

                  <div className="flex flex-center-y locationLabels">
                    <Image src="/assets/images/tick.svg" alt="Camping1" width={24} height={24} />
                    <Typography variant='subtitle1'>2km from a beach</Typography>
                  </div>

                  <div className="flex flex-center-y locationLabels">
                    <Image src="/assets/images/tick.svg" alt="Camping1" width={24} height={24} />
                    <Typography variant='subtitle1'>Near a supermarket</Typography>
                  </div>

                  <div className="flex flex-center-y locationLabels">
                    <Image src="/assets/images/tick.svg" alt="Camping1" width={24} height={24} />
                    <Typography variant='subtitle1'>Lots of hiking spots</Typography>
                  </div>

                </div>

              </Stack>

            </div>


          </div>
        </div>

        <div className={styles.reservationRight}>

          <Typography variant='h4' gutterBottom className={styles.reservationTitle}>Price tag</Typography>
          <div className={styles.locationDetailsRight}>

            <div className={styles.datesAndTotal}>
              <LocalizationProvider dateAdapter={DateAdapter} locale={localeMap[locale]}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                  mt={1}
                  className='w100'
                >
                  <div className="arrival">
                    <Typography variant='subtitle2' gutterBottom className='bold'>Arrival:</Typography>
                    <DesktopDatePicker
                      mask={maskMap[locale]}
                      inputFormat="dd/MM/yyyy"
                      value={ArrivalDate}
                      onChange={newValue => setArrivalDate(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                  <div className="departure">
                    <Typography variant='subtitle2' gutterBottom className='bold'>Departure:</Typography>
                    <DesktopDatePicker
                      mask={maskMap[locale]}
                      inputFormat="dd/MM/yyyy"
                      value={DepartureDate}
                      onChange={newValue => setDepartureDate(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </div>
                </Stack>
              </LocalizationProvider>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                mb={2}
                mt={2}
                className='w100'
              >
                <Typography variant='h6' className='bold'>Total</Typography>
                <Typography variant='h6' className='bold'>€ 165,00</Typography>
              </Stack>
              <Typography variant='subtitle1' className='bold'>Basic costs</Typography>
            </div>



            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
              mt={3}
              className={styles.basicCosts}>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                className='w100'
              >
                <Typography variant='subtitle2'>4 nights</Typography>
                <Typography variant='subtitle2'>€ 80,00</Typography>
              </Stack>
              <Typography variant='subtitle2' gutterBottom color={'#c2c2c2'} className='mt0'>Inclusief extra voertuig, internet/wifi, toilet, honden</Typography>

              <Typography variant='subtitle2' className='bold'>Number of persons</Typography>
              <Stack
                direction="row"
                alignItems="center"
                spacing={0}
                className='mt0 numberOfPersons'
              >
                <Button style={{ fontSize: 55, color: '#222', lineHeight: 1, padding: 5, width: 70, height: 60 }} variant='text'>-</Button>
                <TextField style={{ width: 60, textAlign: 'center' }} id="outlined-basic" variant="outlined" size="small" value={2} />
                <Button style={{ fontSize: 35, color: '#222', lineHeight: 1, padding: 5, width: 70, height: 60 }} variant='text'>+</Button>
              </Stack>

              <Typography variant='subtitle2' className='bold'>Paid amenities</Typography>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                className='w100 mt0'
              >
                <FormControlLabel
                  value="end"
                  control={<Checkbox defaultChecked color="success" />}
                  label="Extra Vehicle"
                  labelPlacement="end"
                />
                <Typography variant='subtitle2'>€ 80,00</Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                className='w100 mt0'
              >
                <FormControlLabel
                  value="end"
                  control={<Checkbox defaultChecked color="success" />}
                  label="Internet/Wifi"
                  labelPlacement="end"
                />
                <Typography variant='subtitle2'>€ 4,00</Typography>
              </Stack>

              <Typography variant='subtitle2' className='bold' mb={2}>Pitch map</Typography>
              {/* <Image src="/assets/images/campsite-map.jpg" alt="PitchMap" width={900} height={455} /> */}
              <img src="/assets/images/campsite-map.jpg" alt="[itchmap" width={'100%'} />

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className="w100 text-center"
                value={PitchSelected}
                onChange={handleChange}
              >
                <MenuItem value={"0"}>------ Select Pitch ------</MenuItem>
                <MenuItem value={"1"}>01 Spot at the water €5</MenuItem>
                <MenuItem value={"2"}>02 Spot in the corner with lots of privacy €2</MenuItem>
              </Select>

            </Stack>


            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
              mt={3}
              className={styles.detailsRightBottom}>

              <Button style={{ marginBottom: 5, marginTop: 5 }} color={'success'} variant='contained' className='w100'>Login to make a reservation</Button>
              <Typography variant='subtitle2' gutterBottom color={'#c2c2c2'} className='mt0'>Your application will be submitted immediately and will have to be confirmed by the location.</Typography>
            </Stack>

          </div>
        </div>

      </Stack>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}

      <style jsx>
        {`
        
        .reservation-content{
          padding-bottom:100px;
          height: 100%;
        }
        .location-title{
          margin:0;
        }
          .location-details{
            display:flex;
            margin-top:10px
          }
          .location-details-left{
            padding: 5px;
            padding-right:20px
          }
          #description{text-align:justify}
          .location-details-right{
            border: 1px solid #ddd;
            padding:5px 20px;
            border-radius:8px;
          }
          .dates *{
            margin-top:10px
          }
          .dates .date{
            padding-left:20px;
            font-weight:700
          }
          .numberOfPersons input{text-align:center}
          .free-amenities{flex-wrap:wrap; width:100%;}
        `}
      </style>
    </div>
  )
}

export default Description

// Router.push({
//   pathname: '/about',
//   query: { name: 'Sajad' },
// })

// < Link href = {{ pathname: '/about', query: { name: 'Sajad' } }}>