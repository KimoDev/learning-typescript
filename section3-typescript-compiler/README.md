## Using Watch Mode
 - problem: Having to compile a file after every change
 - Solution: use tsc -w or tsc --watch [filename].ts

## Generating tsconfig.json file
- Problem: Having more than 1 .ts file in a project and needing to compile multiple .ts files
- Solution: Generating a ts config file by running tsc --init
  - We then can run tsc to compile all .ts files in the project. 
  - Also tsc -w will watch changes across all project changes.