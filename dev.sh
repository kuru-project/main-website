#!/bin/sh

cd ./server
docker-compose up -d
echo "\n\n"
echo "╭───────────────────────────────────────────────────────────────────────╮"
echo "│                                                                       │"
echo "│                                                                       │"
echo "│   API server has been started! Now starting the front-end server...   │"
echo "│                                                                       │"
echo "│                                                                       │"
echo "╰───────────────────────────────────────────────────────────────────────╯"
echo "\n\n"
cd ../client
yarn dev
