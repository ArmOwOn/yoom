# minimalist ZOOM clone website using NextJS & Stream & Clerk

[Live Site](https://yoom-henna.vercel.app)

![App Screenshot](./screenshots/screenshot-1.png)
![App Screenshot](./screenshots/screenshot-2.png)

YOOM is a ZOOM clone built using NextJS, Stream for the video calls/streaming and clerk for account authentication. it has fully functional Video & Voice call, session recording & playback, schedule a meeting and so much more!

## Technologies

NextJS, Stream, Clerk, TailwindCSS, shadcn-UI

## Run Locally

#### 1. Clone this repository to your local machine.

#### 2. Add the environment variables.

You need to add these environment variables to your `.env.local` file:

Coming from [Clerk](https://clerk.com) you need:
`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
`CLERK_SECRET_KEY`

This is optional but if you want a clean sign-in & sign-up URL you can add:
`NEXT_PUBLIC_CLERK_SIGN_IN_URL` to `/sign-in`
`NEXT_PUBLIC_CLERK_SIGN_UP_URL` to `/sign-up`

Then you'll need to get the following variables from [Stream](https://getstream.io):
`NEXT_PUBLIC_STREAM_API_KEY`
`STREAM_SECRET_KEY`

And finally set your base URL:
`NEXT_PUBLIC_BASE_URL` to `localhost:3000`

#### 3. Run `npm install` to install the required dependencies.

#### 4. Run `npm run dev` to start the web server.

## Lessons Learned

This was my first substantial project utilizing the NextJS framework, and initially, I harbored uncertainties about my capability to undertake such an endeavor. However, I am gratified that I embarked on this journey, as it presented me with challenges that facilitated a deeper comprehension of NextJS and its underlying mechanisms.

Through this experience, I became intimately acquainted with NextJS routing and file structure conventions. Consequently, I believe I have emerged as a more proficient developer due to these invaluable learnings. Furthermore, working with Stream and Clerk has streamlined the implementation of authentication and streaming services within my application, rendering the process remarkably effortless.

Overall, this project proved to be an exceptional experience, fostering significant growth in my skills and knowledge. I am grateful for the opportunity to tackle the complexities inherent in such an undertaking, as it has undoubtedly contributed to my professional development.
