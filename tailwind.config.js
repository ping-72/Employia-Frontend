/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkslateblue: "#572f93",
        white: "#fff",
        black: "#000",
        mediumpurple: "#8750b3",
        gray: {
          "100": "#929292",
          "200": "#808080",
          "300": "#11142d",
          "400": "rgba(255, 255, 255, 0.01)",
          "500": "rgba(255, 255, 255, 0.04)",
          "600": "rgba(255, 255, 255, 0.03)",
          "700": "rgba(255, 255, 255, 0.11)",
          "800": "rgba(255, 255, 255, 0.77)",
          "900": "rgba(139, 139, 139, 0.77)",
          "1000": "rgba(0, 0, 0, 0.77)",
          "1100": "rgba(0, 0, 0, 0.5)",
          "1200": "rgba(255, 255, 255, 0.53)",
          "1300": "rgba(255, 255, 255, 0.32)",
          "1400": "rgba(255, 255, 255, 0.13)",
          "1500": "rgba(0, 0, 0, 0.49)",
          "1600": "rgba(255, 255, 255, 0.5)",
        },
        whitesmoke: {
          "100": "#f5f7fa",
          "200": "#f2f2f2",
        },
        red: {
          "100": "#ff1f00",
          "200": "#ff0000",
          "300": "rgba(255, 31, 0, 0.79)",
        },
        midnightblue: "#170039",
        gainsboro: {
          "100": "#dbdbdb",
          "200": "#d9d9d9",
          "300": "rgba(217, 217, 217, 0.26)",
        },
        darkgray: "#a6a6a6",
        lightslategray: "#92929d",
        snow: "#fffbfb",
        lime: {
          "100": "#2ff50f",
          "200": "rgba(47, 245, 15, 0.79)",
        },
        goldenrod: {
          "100": "#ffc554",
          "200": "rgba(255, 197, 84, 0.79)",
        },
        silver: "#c6c6c6",
        dimgray: {
          "100": "#696969",
          "200": "#4e4b4b",
          "300": "rgba(85, 85, 85, 0.77)",
        },
        blueviolet: {
          "100": "rgba(122, 50, 215, 0.5)",
          "200": "rgba(122, 50, 215, 0.94)",
        },
        darkblue: "#530fab",
        indigo: "#652d96",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "europa-grotesk-sh": "'Europa Grotesk SH'",
        inter: "Inter",
        "sf-pro-display": "'SF Pro Display'",
      },
      borderRadius: {
        "22xl": "41px",
        "53xl": "72px",
        "68xl": "87px",
        lg: "18px",
        "13xl": "32px",
        "66xl": "85px",
        "37xl": "56px",
        "74xl-2": "93.2px",
        "30xl": "49px",
        "15xl": "34px",
        "15xl-8": "34.8px",
        "5xl-2": "24.2px",
        "8xl-7": "27.7px",
        "26xl-3": "45.3px",
        "34xl-1": "53.1px",
        "4xl-4": "23.4px",
        "xl-6": "20.6px",
        "32xl-9": "51.9px",
        "33xl": "52px",
        "31xl": "50px",
        "54xl": "73px",
        "14xl": "33px",
      },
    },
    fontSize: {
      "11xl": "1.875rem",
      lg: "1.125rem",
      "5xl": "1.5rem",
      "31xl": "3.125rem",
      "21xl": "2.5rem",
      "2xl-6": "1.35rem",
      mid: "1.063rem",
      "9xl-8": "1.8rem",
      "4xl": "1.438rem",
      "17xl-7": "2.294rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      "23xl-7": "2.669rem",
      "7xl": "1.625rem",
      "15xl": "2.125rem",
      lgi: "1.188rem",
      "9xl": "1.75rem",
      "base-8": "1.05rem",
      "6xl-7": "1.606rem",
      "2xl": "1.313rem",
      "6xl-2": "1.575rem",
      xl: "1.25rem",
      "29xl": "3rem",
      "19xl": "2.375rem",
      "6xl-1": "1.569rem",
      "lgi-2": "1.2rem",
      "mid-7": "1.106rem",
      "10xl-4": "1.838rem",
      "13xl": "2rem",
      "mid-3": "1.081rem",
      "15xl-6": "2.163rem",
      "smi-3": "0.769rem",
      "5xl-6": "1.538rem",
      "base-3": "1.019rem",
      "lgi-8": "1.238rem",
      "mini-9": "0.931rem",
      "mini-7": "0.919rem",
      "sm-8": "0.863rem",
      "12xl-3": "1.956rem",
      "11xl-3": "1.894rem",
      "13xl-1": "2.006rem",
      "52xl-9": "4.494rem",
      "8xl-9": "1.744rem",
      "6xl": "1.563rem",
      inherit: "inherit",
    },
    screens: {
      mq1650: {
        raw: "screen and (max-width: 1650px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      lg: {
        max: "1200px",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
