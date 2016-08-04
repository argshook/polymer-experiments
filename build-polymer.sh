#!/usr/bin/env bash


echo "Extracting JS from polymer.html ..."

# yes, i know this is stupid but its WOP and works good enoug for now, so relax
node \
  node_modules/.bin/vulcanize \
    --strip-comments \
    --inline-scripts \
    --inline-css \
    node_modules/Polymer/polymer.html \
  | sed -n '/\<script\>/,/\<\/script\>/p' \
  | sed -e 's/.*<script>//' -e 's/<\/script>.*//' \
  > ./src/polymer.js

echo "I think it was probably successful!"

