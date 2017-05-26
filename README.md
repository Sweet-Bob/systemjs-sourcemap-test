## This is demo for reproduce issue

Problem: Typescript build generate inline sourcemaps, but systemjs-builder remove it. 

#### How to start:

1. Install dependencies
```
npm install
```

2. Run default gulp task
```
gulp
```

3. See content of ./bundle.js file

4. Inline comments of sourcemaps removed

- index.ts - typescript file
- index.js - output of typescript compiler (with sourcemaps)
- bundle.js - output of systemjs-builder
