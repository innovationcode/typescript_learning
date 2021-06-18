# Typescript_learning
- TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is pure object-oriented with classes, interfaces and statically typed programming languages

## Why use Typescript
- Static typing:
  -- JavaScript is dynamically typed and does not know what type a variable is until it is actually instantiated at run-time. TypeScript adds type support to JavaScript.

- Type Inference:
  -- TypeScript makes typing a bit easier and a lot less explicit by the usage of type inference. Even if you don’t explicitly type the types, they are still there to save you from doing something which otherwise would result in a run-time error.
  
## For react
- ```npx create-react-app my-app --template typescript```
- Browsers don't know how to run typescript code - we need compiler to transfer typescript code to javascript code. You see ```tsconfig.json``` in ```my-app``` folder which converts TS to regular JS.
