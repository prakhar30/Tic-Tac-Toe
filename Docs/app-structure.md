# Next.js App Structure and Routing

## Overview
This document outlines the structure and routing mechanism of our Tic Tac Toe application built with Next.js 13+ App Router.

## Directory Structure
```
src/app/
├── layout.tsx      # Root layout (wraps everything)
├── page.tsx        # Landing page (/)
├── globals.css     # Global styles
└── game/
    └── page.tsx    # Game page (/game)
```

## Key Components

### Root Layout (`src/app/layout.tsx`)
- Main entry point that wraps all pages
- Defines the basic HTML structure
- Includes global providers (GameProvider)
- Applies global styles
- Sets up metadata and font configurations

### Landing Page (`src/app/page.tsx`)
- Default route (`/`)
- Entry point for unauthenticated users
- Renders the `LandingPage` component
- Handles authentication flow (Login/Register)

### Game Page (`src/app/game/page.tsx`)
- Protected route (`/game`)
- Only accessible after successful authentication
- Renders the `GameLobby` component
- Includes client-side authentication check

## Authentication Flow

1. **Initial Access**
   - User visits `/` → sees Login/Register page
   - Can toggle between Login and Register views

2. **After Authentication**
   - Successful login stores token in:
     - localStorage (`accessToken`)
     - cookies (`accessToken`)
   - User is redirected to `/game`

3. **Protected Route**
   - Direct access to `/game` is protected
   - Checks for `accessToken` in localStorage
   - Redirects to `/` if no token found

4. **Logout**
   - Clears tokens from both localStorage and cookies
   - Redirects back to `/`

## State Management
- Uses React Context (`GameProvider`) for game state
- Wraps the entire application in the root layout
- Manages:
  - Game state
  - Player turns
  - Win conditions
  - Score tracking

## Key Features
- Client-side authentication
- Protected routes
- Shared game state
- Responsive design
- Modern UI components

## Technologies Used
- Next.js 13+ (App Router)
- React
- TypeScript
- TailwindCSS
- Context API for state management 