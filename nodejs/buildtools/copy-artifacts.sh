#!/bin/bash

artifactPaths=( package.json ../LICENSE ../README.md )

for a in "${artifactPaths[@]}"
do
    echo "copy: $a"
    cp $PWD/$a $PWD/dist
done


