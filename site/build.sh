#!/bin/sh

# Run scss build
sass ./src/scss:./dist/css

node build.js
