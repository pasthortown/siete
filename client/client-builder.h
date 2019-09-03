#!/bin/bash
ng build --base-href "https://siturin-pruebas.turismo.gob.ec/" --prod
rm -R ./../ClientBuild/
cp -R ./dist/client/ ./../ClientBuild/
