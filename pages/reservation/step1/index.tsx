import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import DateAdapter from '@mui/lab/AdapterDateFns';
import nlLocale from 'date-fns/locale/nl';
import { LocalizationProvider } from '@mui/lab'

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


  const location = {
    locationId: 1,
    locationTitle1: "Amsterdam",
    locationTitle2: 'Camping in Amsterdam outskirts',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br><br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

  useEffect(() => {
    const desc = document.getElementById('description');
    if (desc) {
      desc.innerHTML = location.description
    }

    setArrivalDate(new Date());
  }, []);


  return (
    <div>
      <Head>
        <title>Reservation module</title>
        <meta name="description" content="Reservation module" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack direction={"row"} spacing={1} mt={1} className='reservation-content flex' >

        <div className="reservation-left" style={{ width: "80%" }}>
          <Typography variant='h4' gutterBottom className='bold'>Camping {location.locationTitle1}</Typography>
          <Image src="/assets/images/camping2.jpg" alt="Camping1" width={900} height={455} />

          <div className="location-details">
            <div className="location-details-left">

              <Typography variant='h5' gutterBottom className='bold'>{location.locationTitle2}</Typography>
              <Typography id="description" paragraph align='justify'></Typography>
            </div>



          </div>
        </div>

        <div className="reservation-right">
          <Typography variant='h4' gutterBottom className='bold'>Price tag</Typography>
          <div className="location-details-right">

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
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={2}
              mt={3}
              className="basic-costs">

              <Typography variant='subtitle2' className='bold'>Basic costs</Typography>
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
              <Typography variant='subtitle2' gutterBottom color={'#c2c2c2'} className='mt0'>Inclusief toeristenbelasting, extra voertuig, kind, baby/peuter, internet/wifi, douche, lozen afvalwater, vuilnisbak, drinkwater, lozen cassettetoilet, toilet, honden</Typography>

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
          .numberOfPersons input{text-align:'center'}
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