#!/usr/bin/env bash

echo "Minifying javascript."

# Minify the javascript.
minify --output dist/simcity-alerts.min.js simcity-alerts.js

echo "Minifying CSS."

# Minify the css.
minify --output dist/simcity-alerts.min.css simcity-alerts.css