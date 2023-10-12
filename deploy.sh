#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

read -p "commit信息 > " msg

git init 
git add -A
git commit -m "${msg}"

git push -f git@github.com:CN-Linzhisen/CN-Linzhisen.github.io.git master:gh-pages

cd -
rm -rf docs/.vitepress/dist