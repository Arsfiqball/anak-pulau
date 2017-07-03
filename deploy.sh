git checkout -b gh-pages
git add .
git commit -am "Updated at `date`"


git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git remote add origin-pages https://${GH_TOKEN}@github.com/${GH_PATH}.git  > /dev/null 2>&1
git push --quiet --set-upstream origin-pages gh-pages
