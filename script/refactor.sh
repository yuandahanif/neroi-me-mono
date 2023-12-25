#!/bin/bash

if [ "$1" = "prepare" ]; then
    mv $PWD/src/pages $PWD/src/pages-old
    git reset $PWD/src/pages
    echo "Folder 'pages' renamed to 'pages-old'"
elif [ "$1" = "restore" ]; then
    mv $PWD/src/pages-old $PWD/src/pages
    git reset $PWD/src/pages-old
    echo "Folder 'pages-old' renamed to 'pages'"
else
    echo "Invalid parameter. Usage: ./refactor.sh [prepare|restore]"
fi
