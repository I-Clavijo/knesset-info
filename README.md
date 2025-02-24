# Knesset Info

Knesset Info is a user-friendly Next.js web application designed to simplify exploration of proposed Knesset laws. It features a responsive design built with Tailwind CSS and Flowbite, utilizes a MongoDB database via Mongoose, and employs AI (DeepSeek API) for bill categorization and summarization.

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

**Prerequisites:**

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- npm (or yarn/pnpm as your package manager)

Also, set up your environment variables in a `.env` file. For example:

```properties
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.cl3jl.mongodb.net/knessetDB
DEEPSEEK_KEY=your-deepseek-api-key
```

**Installation:**

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open `http://localhost:3000` in your browser.

**Production Build:**

- Create an optimized production build:
  ```bash
  npm run build
  ```
  - This will create a `.next` directory with the production build.


**Contributing:**

- Contributions are welcome! Please open an issue or submit a pull request.

**License:**

- This project is licensed under the MIT License.

**Acknowledgements:**

- Next.js
- Tailwind CSS
- Flowbite React
- MongoDB
- DeepSeek API

**Feedback:**

- Thank you for using Knesset Info! Please feel free to reach out with any questions or feedback.
