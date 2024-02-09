This project veryfies a webhook event triggered by Yaya-wallet. The proces of verifying the webhooks involves the following step:

1. Validate data/payload on incoming request body
2. Verify the YAYA-SIGNATURE header that's sent by Yaya server 

   2.1. Check Yaya sent a valid secret key

   2.2. Extract signature and timestamp from "YAYA-SIGNATURE"

   2.3. Syncronize my server's time with the time on Yaya's server and check/validate timestamp is not older than 5 minutes

   2.4. Prepare the signed payload

   2.5. Prepare the signature by hashing the signed payload with the secret key

   2.6. Validate the signature extracted from "YAYA-SIGNATURE" against the valid signature

3. Check IP address of the client is in the whitelisted IP addresses of Yaya wallet
4. Send successful response and persist the transaction data to data after response is sent to Yaya wallet.

