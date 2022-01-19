import styles from '../../styles/QR-Code.module.css';
import QRCode from "react-qr-code";
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

export default function QRcode() {
  return (
    <div id="qrCode" className={styles.qrCode}>
      <Stack direction={"column"} spacing={2}>
        <Typography variant='h4' align={'center'}>Scan QR code om jouw plekje te bemachtigen</Typography>
        <QRCode value="hey" />
        <Stack direction={"row"} alignItems={"center"} spacing={1} className={styles.qrCodeImages}>
          <img src="/assets/images/logo.png" alt="Camping2" width={120} height={50} />
          <img src="/assets/images/trinit-logo.png" alt="Camping2" width={170} height={170} />
        </Stack>
      </Stack>
    </div>
  )
}