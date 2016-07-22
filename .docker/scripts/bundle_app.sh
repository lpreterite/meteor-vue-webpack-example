#!/bin/bash
set -e

BUNDLE_TMP_PATH=/bundle_tmp

cd $BUNDLE_TMP_PATH
tar xzf *.tar.gz
cd $BUNDLE_TMP_PATH/bundle/programs/server/
npm i

cp -R $BUNDLE_TMP_PATH /built_app

rm -rf /bundle_tmp