#! /bin/bash

for i in *.jpg; do
    if [ "$i" -nt "thumbnails/tn_$i" ]; then
        convert "$i" -thumbnail 100 "thumbnails/tn_$i";
    fi
done;
