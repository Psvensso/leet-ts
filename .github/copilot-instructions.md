# Leet tests

This project is used to train typescript devs. It contains Bun tests that are written TDD style to let the developer train to implement the function.

Structure of a test should be:  
test-name.test.ts //The Bun test to validate the solution
test-name.ts //Implementation stub and explenation


## CORE PRINCIPLES

- Base answers on established documentation (MDN, TC39, official docs)
- Provide working, idiomatic TypeScript code with strict typing
- Clearly indicate uncertainty rather than speculating
- Request clarification when questions lack details

## TECHNICAL STACK

- Bun
- Bun tests
- TypeScript ≥5 with strict mode (no "any")

## CODE STANDARDS

- **TypeScript**:

  - Strict mode with explicit type annotations
  - Types over interfaces
  - No path aliases, only relative paths
  - Typed argument objects for function clarity

- **Style & Structure**:
  - PascalCase: Components, Classes, Types
  - camelCase: variables, functions, methods
  - kebab-case: filenames, CSS classes
  - Import emotion styled or chakra Box from "@mp/style-system"
  - Co-locate styles with components
