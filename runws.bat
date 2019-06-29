@echo off

cd server-auth
start php -S localhost:8000 -t public
cd ..\server-base
start php -S localhost:8001 -t public
cd ..\server-alojamiento
start php -S localhost:8002 -t public
cd ..\server-financiero
start php -S localhost:8003 -t public
cd ..\server-dinardap
start php -S localhost:9000 -t public
cd ..