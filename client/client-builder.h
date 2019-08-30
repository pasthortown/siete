#!/bin/bash
ng build --base-href "http://siturin-desarrollo.turismo.gob.ec/" --prod
rm -R ./../ClientBuild/
cp -R ./dist/client/ ./../ClientBuild/
