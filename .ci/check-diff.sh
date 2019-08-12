#!/usr/bin/env bash

git diff --exit-code --quiet
if [ 0 -ne $? ]; then
  echo 'Prettier and ESLint diff detected.'
  exit 1
fi
