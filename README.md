## Tech Stack
1. Nextjs - This is a full-fledged framework for reactjs. With batteries-included in terms of built-in features such as routing, data-fetching and image optimization.This came in handy as this application had quite a ton of media(images) to render to the ui. The in-built backend api allowed for seemless intergration of the backend service with the UI.
2. Tailwindcss -  This is a utility-first css framework i used to style my markup. The choice was informed by a ton of advantages that are included. There's no need of creating separate files for styling-this saved me time!Tailwind also takes the mobile-first approach, and throwing afew utility classes handles components' responsiveness.
3. Typescript - Offered type safety by  preventing errors at runtime caused by unexpected types.

## Backend
1. Rest Api- Dataset for the provided api was not complex, it was simple and straight forward.
2. Database- Using a database(mongodb) gave the application a decent level of persistence. While localstorage could have been ideal for the scenario, data is not persisted when browsing context changes. Data can also be lost if browser data is cleared.

## State management
1. RTK Query - offered simplified data fetching, automatic cache invalidation and background refetching. The automatically generated hooks are optimized for rendering performance. The overall implemantation allowed for a consistent way of managing data without writing boiler plate code.

## Continuous Integration and Deployment (CI/CD)
1. Github(VSC) -Github offererd a great level of security for my app, granular access and code documentation. It also intergrated well with my choice of deployment(vercel). It allowed to automatically trigger deployment from git pushes / pull request merges


## Deployment-server 
1. Vercel- Vercel was created by the core team behind Nextjs, for this reason vercel offers exceptional comaptibility and tight intergration for nextjs apps. This translates to streamlined deployment process with minimal configuration.


## Getting Started
1. Clone this repository
<clipboard-copy value="https://github.com/njau58/ricky-morty.git">https://github.com/njau58/ricky-morty.git</clipboard-copy>

2. Install dependecies

npm install


3. Set up your MongoDB& BaseURL connection in .env:
NEXT_PUBLIC_dbURI=your uri

NEXT_PUBLIC_BASE_URL=your api base url

2. Start development server

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

