# Kylix Frontend

## Overview

This project is a web application built with Next.js, React, and TypeScript, utilizing the Polkadot.js API for blockchain interactions. The UI is styled with Material-UI (MUI) and TailwindCSS. We manage the project structure using a Turborepo strategy, with two main packages: `wallet-modal` and `onchain-utils`.

- **`wallet-modal`**: This package includes components for connecting the application to a user's wallet, including a modal and a connect button.
- **`onchain-utils`**: This package contains the on-chain logic, such as utility functions like `useBalance` and other blockchain interactions.

We follow Next.js's recommended `app` directory structure for organizing our components and pages.

## Running the Project

### Prerequisites

Before running the project, ensure you have the following installed on your machine:

- **Node.js** (v20.x or higher)
- **pnpm**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Kylix-Finance/kylix-finance-frontend.git
   cd kylix-finance-frontend
   ```

2. **Install dependencies:**

   Use `pnpm` to install all dependencies across the monorepo:

   ```bash
   pnpm install
   ```

### Running the Development Server

1. **Start the development server:**

   To start the development server for all packages, run:

   ```bash
   pnpm turbo run dev
   ```

2. **Access the application:**

   Once the server is running, you can access the application by navigating to `http://localhost:3000` in your web browser.

### Running Individual Packages

You can also run or build individual packages using Turborepo with `pnpm`:

1. **Run the `wallet-modal` package:**

   ```bash
    turbo run dev --filter=wallet-modal
   ```

2. **Run the `onchain-utils` package:**

   ```bash
    turbo run dev --filter=onchain-utils
   ```

3. **Build all packages:**

   To build all packages at once:

   ```bash
    turbo run build
   ```

## Adding a New Icon to the `TokenIcon` Component

The `TokenIcon` component is responsible for rendering or generating icons for various tokens/assets. Follow the steps below to add a new SVG icon to this component.

### 1. Add the SVG File

First, you need to add the SVG file for the new token.

1. Navigate to the `apps/web/src/assets/svgs/coins` directory.
2. Paste the new SVG file into this folder.
3. Make sure the file name starts with an uppercase letter and does not contain any symbols (e.g., `FileName.svg`).

### 2. Update the `index.ts` File in the `coins` Directory

After adding the SVG file:

1. Open the `apps/web/src/assets/svgs/coins/index.ts` file.
2. Import your new SVG file like this:

   ```typescript
   import FileName from "./FileName.svg";
   ```

3. Add the imported icon to the `Coins` object:

   ```typescript
   export const Coins = {
     BitCoin,
     Dot,
     Ankr,
     Aave,
     FileName, // new icon
   };
   ```

### 3. Add the Icon to the `TokenIcons` Configuration

To make your new icon available in the application:

1. Open the `apps/web/src/config/icons.ts` file.
2. Import the new icon from the `Coins` object:

   ```typescript
   import { Coins } from "~/assets/svgs";
   ```

3. Add the new icon to the `TokenIcons` object:

   ```typescript
   export const TokenIcons: Record<string, Icon> = {
     BTC: Coins.BitCoin,
     DOT: Coins.Dot,
     Ankr: Coins.Ankr,
     Aave: Coins.Aave,
     WBTC: Wbtc,
     WETH: Weth,
     USDT: Usdt,
     USDC: Usdc,
     Symbol: Coins.FileName, // new icon
   };
   ```

4. Ensure that the `Symbol` key corresponds to the appropriate token symbol you'll use in your application.

### 4. Usage

Now, you can use the new icon throughout your application by referencing it through the `TokenIcons` object.

## Project Structure

Here's a quick overview of the project's folder structure relevant to the icon addition process:

```
apps/
├── web/
│   ├── src/
│   │   ├── assets/
│   │   │   └── svgs/
│   │   │       └── coins/
│   │   │           ├── index.ts
│   │   │           ├── BitCoin.svg
│   │   │           ├── Dot.svg
│   │   │           └── FileName.svg  // newly added icon
│   │   ├── components/
│   │   │   └── TokenIcon.tsx
│   │   ├── config/
│   │   │   └── icons.ts
│   └── ...
└── ...
```
