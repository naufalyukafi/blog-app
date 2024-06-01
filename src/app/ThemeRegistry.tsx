// app/ThemeRegistry.tsx
"use client";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Space_Grotesk, Inter, Lato, Roboto } from "next/font/google";
import material from "@/config/material";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-grotesk",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lato = Lato({
    subsets: ["latin"],
    variable: "--font-lato",
    weight: "700",
});
const roboto = Roboto({
    subsets: ["latin"],
    variable: "--font-roboto",
    weight: "400",
});

// This implementation from emotion-js
export default function ThemeRegistry(props: any) {
    const { children } = props;

    return (
        <>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={material}>

                    <CssBaseline />
                    <main
                        className={`${inter.className} ${spaceGrotesk.variable} ${inter.variable} ${lato.variable}`}
                    >
                        {children}
                    </main>

                </ThemeProvider>
            </StyledEngineProvider>
        </>
    );
}
