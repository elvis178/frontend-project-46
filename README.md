### Hexlet tests and linter status:
[![Actions Status](https://github.com/elvis178/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/elvis178/frontend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/771ca4408f4f6129d234/test_coverage)](https://codeclimate.com/github/elvis178/frontend-project-46/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/771ca4408f4f6129d234/maintainability)](https://codeclimate.com/github/elvis178/frontend-project-46/maintainability)

Gendiff is a command-line utility designed to compare two files and display the differences. It supports JSON and YML formats and offers three output formats: stylish (default), plain, and JSON.

## Install
Clone this repository:
```
git clone https://github.com/elvis178/frontend-project-46.git
```
### Install dependencies
```
make install
```
### Install the package
``` 
npm link
```

## Usage
### To get help
```
gendiff -h
```
### To see version
``` 
gendiff -v
```
### To compare two files
```
gendiff <filepath1> <filepath2>
```
### Choosing the output format
```
gendiff --format plain/json <filepath1> <filepath2>
```
## Examples
### Help and version
[![asciicast](https://asciinema.org/a/6JzFWUJ1O95PbsjEiiPNjJrNB.svg)](https://asciinema.org/a/6JzFWUJ1O95PbsjEiiPNjJrNB)

### Finding differences between file1.json and file2.json (flat files)
[![asciicast](https://asciinema.org/a/B2KXMpxMQptBOcTg1yvnJaBmw.svg)](https://asciinema.org/a/B2KXMpxMQptBOcTg1yvnJaBmw)

### Finding differences between file1.yml and file2.yml (flat files)
[![asciicast](https://asciinema.org/a/lsqCc5hHix2U4VwkEyvE2CIuQ.svg)](https://asciinema.org/a/lsqCc5hHix2U4VwkEyvE2CIuQ)

### Stylish-format(default format). Finding differences between file1.json and file2.json (nested structures)
[![asciicast](https://asciinema.org/a/g0cR0QBJhhM3cMYCQ4SGIi2Ac.svg)](https://asciinema.org/a/g0cR0QBJhhM3cMYCQ4SGIi2Ac)

### Plain-format. Finding differences between file1.json and file2.json (nested structures)
[![asciicast](https://asciinema.org/a/PZ9GV3Qdvjt9R7aLaN5RLJVqY.svg)](https://asciinema.org/a/PZ9GV3Qdvjt9R7aLaN5RLJVqY)

### Json-format. Finding differences between file1.json and file2.json (nested structures)
[![asciicast](https://asciinema.org/a/EYKUONFP6i3QKV3LDxK00vbFI.svg)](https://asciinema.org/a/EYKUONFP6i3QKV3LDxK00vbFI)