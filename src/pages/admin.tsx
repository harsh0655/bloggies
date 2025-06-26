import { useEffect, useState } from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Typography,Box} from "@mui/material";

type UserEntry 
= {
  userId: string;
  credits: number;
  raffleEntries: number;
};

export default function AdminPage(){
  const [users,setUsers] = useState<UserEntry[]>([]);

  useEffect(() => {
    fetch("/api/admin-data").then((res) => res.json()).then((data) => setUsers(data.users || []));
  }, []);// first convert it into json then store it in users using setUsers in array format//

  return (
    <Box sx={{minHeight: "100vh",bgcolor: "#121212",color: "#fff",display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",px: 2,py: 4,}}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        Admin Dashboard
      </Typography>

      <TableContainer component={Paper} sx={{ maxWidth: 900 }}>
        <Table sx={{ minWidth: 650 }} aria-label="admin data table">
          <TableHead sx={{ backgroundColor: "#1e1e1e" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                User ID
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }} align="right">
                Credits
              </TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }} align="right">
                Raffle Entries
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3} align="center">
                  No data found.
                </TableCell>
              </TableRow>
            ) : (
              users.map((row) => (
                <TableRow key={row.userId} hover>
                  <TableCell component="th" scope="row">
                    {row.userId}
                  </TableCell>
                  <TableCell align="right">{row.credits}</TableCell>
                  <TableCell align="right">{row.raffleEntries}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
