"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  CardActions,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function Page() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const theme = useTheme();

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push("/");
    } else {
      const data = await res.json();
      setError(data.message);
    }
  };
  return (
    <Box
      className="w-screen h-screen flex flex-col justify-center items-center bg-[#F0F4F8] dark:bg-black-500"
      sx={{
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 3,
          borderRadius: 8,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            sx={{
              marginBottom: 3,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Login
          </Typography>
          <Box className="flex flex-col gap-2">
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="small"
              fullWidth
              placeholder="Enter your password"
              className="rounded-md font-number font-bold text-base bg-[#F5F5F5] dark:bg-black-500 text-primary-800 dark:text-primary-100 leading-5"
              autoComplete="off"
              type="password"
              FormHelperTextProps={{
                sx: {
                  fontWeight: "bold",
                },
              }}
              sx={{
                backgroundColor: "",
                borderRadius: 2,
                "& .MuiInputBase-root": {
                  paddingY: "10px",
                  paddingX: "16px",
                },
              }}
            />
            <Typography
              color={theme.palette.error.main}
              fontWeight={"bold"}
              variant="caption"
            >
              {error}
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            disableElevation
            onClick={handleSubmit}
            fullWidth
            sx={{
              color: "#FFFFFF",
              fontWeight: "bold",
              paddingY: "10px",
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
