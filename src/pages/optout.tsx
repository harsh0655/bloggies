import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";

export default function OptOutPage() {
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");

  const handleOptOut = async () => {
    setStatus("Processing...");
    const res = await fetch("/api/remove-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await res.json();
    setStatus(data.message);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#121212",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, maxWidth: 400, width: "100%", borderRadius: 3 }}>
        <Typography variant="h5" gutterBottom align="center">
          Opt Out of Bloggies
        </Typography>

        <Typography variant="body2" align="center" sx={{ mb: 3 }}>
          Enter your user ID to remove your enrollment. 5 credits will be deducted.
        </Typography>

        <TextField
          fullWidth
          label="User ID"
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          sx={{ mb: 2 }}
        />

        <Button
          fullWidth
          variant="contained"
          color="error"
          onClick={handleOptOut}
          sx={{ fontWeight: 600, borderRadius: 2 }}
        >
          Opt Out
        </Button>

        {status && (
          <Typography variant="body2" align="center" sx={{ mt: 3, color: "#111111" }}>
            {status}
          </Typography>
        )}
      </Paper>
    </Box>
  );
}
