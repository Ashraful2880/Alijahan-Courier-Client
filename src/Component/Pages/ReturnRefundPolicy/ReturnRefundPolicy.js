import { Box, Container } from "@mui/material";
import React from "react";

const ReturnRefundPolicy = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={{ mb: 5 }}>
        <h2 style={{ fontWeight: 600 }}>Return & Refund Policy</h2>
      </Box>

      <p>
        For cancelled orders inside Dhaka, products will be returned to merchant
        within 2 working days. For cancelled orders outside Dhaka, products will
        be returned to merchant within 5 working days. Return charges may be
        applicable for both delivered and undelivered products for both inside
        and outside Dhaka. The return charges shall be same as the delivery
        charge.
      </p>
      <p>
        Refund request will only be entertained where the merchant has paid in
        advanced to <strong>Alijahan Courier Service</strong> and
        <strong>Alijahan Courier Service</strong>
        willingly or unwillingly refuse to deliver products upon certain
        criteria. Merchant can claim for refund for the portion of service not
        provided by <strong>Alijahan Courier Service</strong>. All refund and
        product return requests must be sent by email to
        <strong style={{ color: "#08A74C" }}> info@alijahan.com</strong> The
        product will be returned within 15 days from date of email. Merchants
        are responsible for paying for all shipping costs for returned item.
      </p>
      <p>
        Shipping costs are non-refundable. If you asked for a refund, the cost
        of any return shipping will be deducted from actual amount.
      </p>
      <p>
        <strong>Alijahan Courier Service</strong>will start processing the
        refund upon verifying and accepting valid return requirements. Subject
        to satisfactory verification, refund will be completed within 15 working
        days.
      </p>
      <p>
        <strong>Alijahan Courier Service</strong>will adjust all shipping
        charges, services charges, transaction fees and other charges from the
        original amount of merchants. After adjustment partial payments will be
        processed via bank or MFS to the designated bank accounts or MFS wallets
        of the merchants.
      </p>
    </Container>
  );
};

export default ReturnRefundPolicy;
