# Pagination Project

This repository contains solutions to pagination tasks.

## Requirements
- All files are interpreted/compiled on Ubuntu 18.04 LTS using python3 (version 3.7).
- All files end with a new line.
- The first line of all files is exactly `#!/usr/bin/env python3`.
- A README.md file, at the root of the folder of the project, is mandatory.
- The code follows the pycodestyle style (version 2.5.*).
- The length of the files is tested using `wc`.
- All modules have documentation.
- All functions have documentation.
- All functions and coroutines are type-annotated.

## Setup
- Use `Popular_Baby_Names.csv` as the data file for the project.

## Tasks
### 0. Simple Helper Function
Write a function named `index_range` that takes two integer arguments `page` and `page_size`.
The function should return a tuple containing a start index and an end index corresponding to the range of indexes to return in a list for those particular pagination parameters.
Page numbers are 1-indexed, i.e., the first page is page 1.

### 1. Simple Pagination
Implement a method named `get_page` in the `Server` class.
The method should take two integer arguments, `page` (default value 1) and `page_size` (default value 10).
Use `assert` to verify that both arguments are integers greater than 0.
Use `index_range` to find the correct indexes to paginate the dataset correctly and return the appropriate page of the dataset.
If the input arguments are out of range for the dataset, an empty list should be returned.

