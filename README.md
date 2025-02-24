# Knesset Info

Knesset Info is a Next.js web application that makes exploring proposed laws in the Knesset simple and accessible. The platform uses modern web technologies, a responsive design with Tailwind CSS and Flowbite components, and integrates with a MongoDB database via Mongoose. It also leverages AI (via DeepSeek API) to categorize and summarize bills.

## Features

- **Responsive UI**  
  Responsive designs built with [Tailwind CSS](tailwind.config.ts) and [Flowbite React](package.json) ensure a modern and accessible user experience across devices.

- **Bill Listings and Details**  
  Browse a grid of featured bills using components like [FeaturedBillCardGrid](components/FeaturedBillCardGrid.tsx) and view detailed Bill pages ([BillCardPage](components/BillCardPage.tsx)).

- **Dynamic Categorization and Summarization**  
  Bills are automatically processed using the DeepSeek API. See [route.ts-1](app/api/db-update/route.ts) for the bill processing logic.

- **Member Profiles and Rankings**  
  Explore member profiles and see rankings based on the number of bills sponsored, as implemented in [MemberCardPage](components/MemberCardPage.tsx) and [Ranking](components/Ranking.tsx).

- **Infinite Scrolling and Filtering**  
  Enjoy a smooth infinite scrolling experience on the bills page ([page-infinite-scrolling.tsx](app/page-infinite-scrolling.tsx)) and easily filter bills by category ([Categories](app/categories.ts)).

- **Theming and Dark Mode**  
  Automatic dark mode support is enabled through Flowbite and can be toggled in the app ([layout.tsx](app/layout.tsx)).

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (or yarn/pnpm as your package manager)

Also, set up your environment variables in a `.env` file. For example:

```properties
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.cl3jl.mongodb.net/knessetDB
DEEPSEEK_KEY=your-deepseek-api-key
```
