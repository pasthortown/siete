#!/bin/bash
screen -AmdS dinardap php -S ws-pruebas.turismo.gob.ec:9000 -t server-dinardap/public
screen -AmdS consultor php -S ws-pruebas.turismo.gob.ec:9001 -t server-consultor/public
screen -AmdS exporter php -S ws-pruebas.turismo.gob.ec:9002 -t server-exporter/public
screen -AmdS auth php -S ws-pruebas.turismo.gob.ec:8000 -t server-auth/public
screen -AmdS base php -S ws-pruebas.turismo.gob.ec:8001 -t server-base/public
screen -AmdS alojamiento php -S ws-pruebas.turismo.gob.ec:8002 -t server-alojamiento/public
screen -AmdS financiero php -S ws-pruebas.turismo.gob.ec:8003 -t server-financiero/public

