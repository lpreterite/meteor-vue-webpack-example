# build in node v4.4.4
# meteor build after npm install

set -e

COPIED_APP_PATH=/copied-app
BUNDLE_DIR=/tmp/bundle-dir

# sometimes, directly copied folder cause some wierd issues
# this fixes that
cp -R /app $COPIED_APP_PATH
cd $COPIED_APP_PATH

echo "===== meteor npm install : start ====="
# webpack:webpack need some nodejs package to bundle meteor clinet
npm i
echo "===== meteor npm install : end ====="
echo "===== meteor build : start ====="
meteor build --directory $BUNDLE_DIR --server=http://localhost:3000
echo "===== meteor build : end ====="

cd $BUNDLE_DIR/bundle/programs/server/
npm i

mv $BUNDLE_DIR/bundle /built_app

# cleanup
rm -rf $COPIED_APP_PATH
rm -rf $BUNDLE_DIR
rm -rf ~/.meteor
rm /usr/local/bin/meteor