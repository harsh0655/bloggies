import { useState } from "react";
import { enrollUser, awardCredit } from "../utils/ecosystem";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

export default function SignupPage() {
  const [userId, setUserId] = useState("");
  const [status, setStatus] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Processing...");

    try {
      await enrollUser(userId);
      await awardCredit(userId, 1);
      setStatus("You’ve been enrolled & awarded 1 credit.");
    } catch {
      setStatus("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-black px-8 py-10">
        <div className="w-12 h-12 mx-auto mb-6 bg-black rounded-full flex items-center justify-center text-white text-xl font-bold">
          B
        </div>

        <h2 className="text-center text-2xl font-extrabold text-black">
          Join our exclusive community
        </h2>
        <p className="text-center text-sm text-black mt-1 mb-8">
          Become a member and earn your first credit instantly.
        </p>

        <Box component="form" onSubmit={handleSignup} noValidate>
      <Stack spacing={3}>
        <TextField
          fullWidth
          required
          variant="outlined"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter your User ID"
          InputProps={{
            sx: {
              borderRadius: "999px",
              backgroundColor: "#ffffff",
              color: "#000000",
              px: 2,
            },
          }}
          inputProps={{
            style: { color: "#000000" },
          }}
          FormHelperTextProps={{ sx: { color: "#000" } }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            borderRadius: "999px",
            backgroundColor: "#000000",
            color: "#ffffff",
            fontWeight: 600,
            py: 1.5,
            textTransform: "none",
            boxShadow: 3,
            "&:hover": {
              backgroundColor: "#1a1a1a",
            },
          }}
        >
          Create my account
        </Button>

        {status && (
          <Typography
            variant="body2"
            align="center"
            sx={{ color: "#111827", mt: 1 }}
          >
            {status}
          </Typography>
        )}
      </Stack>
    </Box>
      </div>
    </div>
  );
}
