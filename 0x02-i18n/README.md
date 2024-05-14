# Flask Internationalization (i18n) Example

This repository contains a Flask application demonstrating how to implement internationalization (i18n) features using Flask-Babel extension.

## Overview

The application consists of multiple tasks, each focusing on different aspects of i18n setup in Flask. Here's a brief overview of each task:

1. **Basic Flask app**: Setup a basic Flask app with a single route and an HTML template.
2. **Basic Babel setup**: Install Flask-Babel extension and configure the Babel object in the Flask app.
3. **Get locale from request**: Implement a function to determine the best matching locale based on the request.
4. **Parametrize templates**: Parametrize templates using `_` or `gettext` functions and provide translations for different languages.
5. **Force locale with URL parameter**: Implement a way to force a particular locale by passing the `locale` parameter to the app's URLs.

## Directory Structure

- `0x02-i18n/`
  - `0-app.py`: Flask application files for each task.
  - `templates/`: HTML templates for rendering pages.
  - `translations/`: Translation files for different languages.
  - `babel.cfg`: Configuration file for Babel extraction settings.
  - `README.md`: Instructions and information about the project.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Motekema/alx-backend.git
cd alx-backend/0x02-i18n
0x02. i18n
