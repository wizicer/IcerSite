#!/bin/sh
TPATH=../../content/public/resume/

rm -rf $TPATH
yarn cross-env NODE_ENV=build postcss ./tailwind.css -o ${TPATH}build.css
cp -i ./docs/app.js ./docs/index.html ./docs/vue.esm-browser.prod.js ${TPATH}
cp -ir ./docs/fonts/ ${TPATH}
sed -i 's/\.\/vue\.esm-browser\.js/.\/vue.esm-browser.prod.js/' ${TPATH}app.js