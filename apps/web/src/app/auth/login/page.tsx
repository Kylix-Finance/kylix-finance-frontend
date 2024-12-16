"use client";
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
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import usePreferences from "~/hooks/usePreferences";

export default function Page() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  usePreferences();

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
      className="w-screen h-screen flex flex-col justify-center items-center bg-[#F0F4F8] dark:bg-[#0D0D0D]"
      sx={{
        padding: 2,
      }}
    >
      <Card
        className="dark:bg-black-500"
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
            className="dark:text-primary-100"
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
              style={{
                fontSize: "10px",
                borderRadius: "4px",
              }}
              className="bg-neutral-100 dark:bg-[#0D0D0D] font-body"
              placeholder="Password"
              inputProps={{
                style: {
                  fontWeight: "normal",
                },
                className:
                  "dark:placeholder:text-neutral-200 !font-body dark:text-primary-100",
              }}
              InputProps={{
                style: {
                  backgroundImage: "none",
                  color: "#C7C7C7",
                  fontSize: "14px",
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
