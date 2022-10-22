# Code Review Checklist

1. Are your linter settings correct? i.e. will there be changes that are really just your linter moving code around?
2. Do you follow naming conventions?
3. Does the code run without errors?
4. Does the code cover all features it intends to add?
5. Is there any duplicated code?
6. No zombie code.
7. Remove all console logs
8. Does every item generated in a list of items have a key? ("If they could have added a key, did they?")
9. Refer to the recommended practice below to see if the code could be refactoring

# Recommended Practices

1. Keep components small
2. Try to use the spread/rest operator
3. Only let or const, no var
4. Always have a unique “key” prop for each list item/row in the list/table
5. Cancel the asynchronous API call, when the component is unmounted. Normally cancel API call in useEffect return function
6. Enable 'lint on save' or 'format with Prettier on save' in VSCode.
7. If you're writing a function that will conceivably be used across multiple files, put it in /util.
8. Use the Boyscout's Campground rule: try to leave things cleaner than you found them.

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

## IDE Setup

- Before you started, please make sure you have set up the setting of your IDE(Visual Studio Code in our case) to auto-format and validate the lint on Save
- Make sure you have run `npm install` before the setup
- Make sure you have installed the `ESLint` extension if not, please install the `ESLint` extension before continue.
- Make sure you have installed the `Prettier - Code formatter` extension if not, please install the `Prettier - Code formatter` extension before continue.

### Linting

This project uses a .prettierrc.json file located at the project root. Your code must follow the linting rules described in this file. We will not accept pull requests with any instances of code being moved around by Prettier without real changes. We expect every developer to help enforce these project-wide linting rules.

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

# Basic Rules

We aim to be relentlessly consistent with styling because (a) it means other devs don't have to make decisions about how to style new components and (b) it means you know what to expect.

- Each file should contain one React component which is to be used outside that file. Additional components may be included in the same file provided they are only used as children of the main component; if required by another component, they should be moved into their own file. An easy way to tell that you aren't following this rule is: Are you exporting more than one component from the file? If you are, pick one to stay in the file. All others must go into their own file.
- If you are writing a new component, you should attempt to style the code the same way other people wrote theirs.

### Naming Files and Components

Folder names should be camelCase.

File names should be camelCase. (It used to be kebab but isn't anymore.)

Component names should be PascalCase.

(If you are wondering how these rules were chosen: they are arbitrary. The important part is to pick a style and stick to it for consistency.)

### Props

Props should be explictly named in all cases:

```jsx
// bad
const Component = (props) => {
  return <div>{props.foo}</div>;
};

// good
const Component = ({ foo }) => {
  return <div>{foo}</div>;
};

//good
const Component = (props) => {
  const { foo } = props;
  return <div>{foo}</div>;
};
```

This way is superior because it means you don't have to look at the contents of the props interface to know what's in the component.

Always use camelCase for prop names, or PascalCase if the prop value is a React component.

```jsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

### On Interfaces

If an interface defines the props for a component, the interface's name should:

- End in "Props"
- Live in the same file as the component

If the interface is only used for this component and wont be shared with others it can remain in its components folder.
If the interface isn't defining props, it should go in the `/src/interface` folder.

### Components And Their Children

If a component's child will only ever be used within that component, you are welcome to define it locally within the same file as its parent component.

However, if the component will be used as a child of other components, it should live in its own file.

In other words: It is ok to define multiple components in the same file _if and only if_ they aren’t used outside of the main component we are exporting.

The reason for this is that exporting two components from one file is disorganized.

### Imports

Imports should be ordered as follows: packages, reused components, component-specific files, images.

```jsx
import React from 'react';

import PanelHeader from '../helpers/PanelHeader';
...

import 'Example.css';

import Cat from "../assets/cat.jpeg";
```

## Accessibility

-For more detailed look on accessibility, great resource are https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML and https://www.w3.org/WAI/standards-guidelines/wcag/glance/

- Always include an `alt` prop on `<img>` tags.

- Do not use words like "image", "photo", or "picture" in `<img>` `alt` props.

> Why? Screenreaders already announce `img` elements as images, so there is no need to include this information in the alt text.

```jsx
// bad
<img src="hello.jpg" alt="Picture of me waving hello" />

// good
<img src="hello.jpg" alt="Me waving hello" />
```

-if the image is just decorative leaving an empty alt tag will help screen reader, recognize the img however not go into mass file name or details. Another option would be to add an aria-role with role='presentation'

```jsx
// good
<img src="decorativeImage.jpg" alt="" />
```

- Use only valid, non-abstract [ARIA roles](https://www.w3.org/TR/wai-aria/#usage_intro). eslint: [`jsx-a11y/aria-role`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md)

  ```jsx
  // bad - not an ARIA role
  <div role="datepicker" />

  // bad - abstract ARIA role
  <div role="range" />

  // good
  <div role="button" />
  ```

- Do not use `accessKey` on elements. eslint: [`jsx-a11y/no-access-key`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md)

> Why? Inconsistencies between keyboard shortcuts and keyboard commands used by people using screenreaders and keyboards complicate accessibility.

```jsx
// bad
<div accessKey="h" />

// good
<div />
```

-Good semantics are important, using proper html tags

```jsx
// bad
<div className='title'>My heading</div>

// good
<h1 className='title'>My heading</h1>
```

-being descriptive about where the link will be taking them.

## Misc

- Avoid using an array index as `key` prop, prefer a stable ID. eslint: [`react/no-array-index-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)

> Why? Not using a stable ID [is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318) because it can negatively impact performance and cause issues with component state.

We don’t recommend using indexes for keys if the order of items may change.

```jsx
// bad
{
  todos.map((todo, index) => <Todo {...todo} key={index} />);
}

// good
{
  todos.map((todo) => <Todo {...todo} key={todo.id} />);
}
```

_In practice it may be difficult to avoid using an index. However, if there is something like "userId" avilable, use that._

## Closing Remarks

Boy Scout Rules in effect: Help keep the code base's stylings consistent and to a high standard.

If you really need to diverge for some reason, please explain why you did it in your PR, including what you tried that conformed to style guidelines that didn't work.
