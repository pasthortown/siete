#!/bin/bash
ng build --base-href "https://siturin.turismo.gob.ec/" --prod
rm -R ./../ClientBuild/
cp -R ./dist/client/ ./../ClientBuild/
