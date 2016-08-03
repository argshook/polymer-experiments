#!/usr/bin/env bash

node node_modules/.bin/vulcanize --strip-comments --inline-scripts --inline-css node_modules/Polymer/polymer.html | sed -n '/\<script\>/,/\<\/script\>/p' | sed -e 's/.*<script>//' -e 's/<\/script>.*//' > ./src/polymer.js


echo "I think it was probably successful!"

