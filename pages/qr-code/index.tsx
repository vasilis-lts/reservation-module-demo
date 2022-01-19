import styles from '../../styles/QR-Code.module.css';
import QRCode from "react-qr-code";
import { Stack, Typography } from '@mui/material';

export default function QRcode() {
  return (
    <div id="qrCode" className={styles.qrCode}>
      <Stack direction={"column"} spacing={2}>
        <Typography variant='h4' align={'center'}>Scan QR code om jouw plekje te bemachtigen</Typography>
        <QRCode value="hey" />
      </Stack>
    </div>
  )
}