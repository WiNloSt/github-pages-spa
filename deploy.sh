#! /usr/bin/env bash

yarn build
cp build/index.html build/404.html
echo github-pages-spa.codekelvin.com > build/CNAME
gh-pages -d build
