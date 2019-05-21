#!/bin/bash
ng build --prod
rm -R ./../ClientBuild/
cp -R ./dist/client/ ./../ClientBuild/