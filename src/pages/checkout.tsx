import {loadStripe} from "@stripe/stripe-js";
import {Box,Paper,Typography,Button,CircularProgress} from "@mui/material";
import { useState} from "react";

const stripePromise = loadStripe
(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CheckoutPage() {
  const [loading, setLoading]= useState(false); // for buffering icon//

  const handleClick = async () => {
    setLoading(true);
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();

    const stripe = await stripePromise;
    await stripe?.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <Box sx={{minHeight: "100vh", bgcolor: "#121212", display: "flex", justifyContent: "center", alignItems: "center",px: 2,}}>
      <Paper elevation={6} sx={{p: 4,borderRadius: 3, textAlign: "center", maxWidth: 400,width: "100%",color: "white",bgcolor: "#1e1e1e",}}>
        <Typography variant="h5" gutterBottom>
          Buy Pro Meme Pack
        </Typography>

        <Typography variant="body2" sx={{ mb: 4 }}>
          Unlock advanced meme generation features for just $7.
        </Typography>

        <Button variant="contained" color="primary" onClick={handleClick} disabled={loading} sx={{ bgcolor: "#7e22ce","&:hover": { bgcolor: "#6b21a8" },borderRadius: 2,fontWeight: 600,px: 3,py: 1.5,}} fullWidth >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Buy for $7"}
        </Button>
      </Paper>
    </Box>
  );
}
