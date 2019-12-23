## Using Watch Mode
 - problem: Having to compile a file after every change
 - Solution: use tsc -w or tsc --watch [filename].ts

## Generating tsconfig.json file
- Problem: Having more than 1 .ts file in a project and needing to compile multiple .ts files
- Solution: Generating a ts config file by running tsc --init
  - We then can run tsc to compile all .ts files in the project. 
  - Also tsc -w will watch changes across all project changes.

## Properties of tsconfig.json
Typescripts compiler settings are configured through the tsconfig.json. Despite the file itself explaining what each property does, i will list some of the main key important properties here.
- target: The target javascript version you wish to compile your typescript too.
- lib: Library files that should be included during compilation. such as 'dom'. Which is already a default value by TS.
- allowJs: a boolean value to allow javascript files to be compiled. such as vanilla js files.
- exclude: An array to tell typescript which files/directories shouldn't be compiled. (ain't used much)
- include: An array to tell typescript which files/directories to compile. (ain't used much)
- sourceMap: A boolean value to tell the compiler to generate a .map.js file. In order to help debugging complex js files.
- outDir: A path to tell typescript where compiled js files should be output to. Usually in a 'dist' directory.
- rootDir: A path to tell typescript where to look for directories/files to compile.
- noEmitOnError: A boolean value, which tells typescript if there are errors then do not output a js file. (Default = false)