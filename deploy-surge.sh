#! /usr/bin/env bash

yarn build
mv build/index.html build/200.html
surge build https://spa-app-deployment-101.surge.sh
