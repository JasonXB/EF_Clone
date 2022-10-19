This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. T he page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Naming Conventions

### Naming Files and Components

Folder names should be camelCase.

File names should be kebab-case-like-this.

Component names should be PascalCase.

### On Interfaces

If an interface defines the props for a component, the interface's name should:

- End in "Props"
- Live in the same file as the component

If the interface isn't defining props, it should go in the `/src/interface` folder.

### Components And Their Children

If a component's child will only ever be used within that component, you are welcome to define it locally within the same file as its parent component.

However, if the component will be used as a child of other components, it should live in its own file.

In other words: It is ok to define multiple components in the same file _if and only if_ they aren’t used outside of the main component we are exporting.

The reason for this is that exporting two components from one file is disorganized.

## Linting

This project uses a .prettierrc.json file located at the project root. Your code must follow the linting rules described in this file.

The reason for this is: If we had different linting rules, pull requests on GitHub would continually contain "changes" that are really just the linter moving code around. We want to avoid that.

_To use our linting file with your VSCode's Prettier, do this:_

- Go to File => Preferences => Settings
- Type in "prettier" in the search bar
- Type in ".prettierrc.json" in the "Prettier: Config Path" input.

You can test the linter is active by writing `const testingTheLinter = "someText"` (notice the double quotes), saving the file, and checking if the linter changes the double quotes to single quotes.

**What if my linter doesn't auto-format the files like I expect?**

The first move is to verify you have Prettier installed.

If it's installed but doesn't work, click "Prettier" in the bottom right of the VSCode window. It should show an error message in the terminal window. Odds are you've told VSCode that the linting file (".prettierrc.json") is in a different location than where it really is.

Instructions for non-VSCode non-Prettier linters is beyond the scope of this README.
