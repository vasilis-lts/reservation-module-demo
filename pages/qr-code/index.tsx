import styles from '../../styles/QR-Code.module.css';
import QRCode from "react-qr-code";
import { Stack, Typography } from '@mui/material';
import Head from 'next/head';
import CNav from '../../components/Nav/Nav';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

export default function QRcode() {
  const { t } = useTranslation('common');

  return (
    <div id="qrCode" className={styles.qrCode}>
      <Head>
        <title>Camping QR-Code</title>
        <meta name="description" content="Reservation module" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/static/CamperLinkNav.module.css" />
      </Head>
      <CNav />

      <Stack direction={"column"} spacing={2}>
        <Typography variant='h4' className={styles.qrTitle} align={'center'}>{t('QrCodeTitle')}</Typography>
        <QRCode value="hey" />
        <Stack direction={"row"} alignItems={"center"} spacing={1} className={styles.qrCodeImages}>
          <img src="/assets/images/logo.png" alt="Camping2" width={120} height={50} />
          <img src="/assets/images/trinit-logo.png" alt="Camping2" width={170} height={170} />
        </Stack>
      </Stack>
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