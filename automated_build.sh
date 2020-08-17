# Copy static site
CWD=`pwd`

# Clone Pages repository
cd /tmp
cd build && git checkout -b gh-pages origin/gh-pages # If not using master

# Trigger Jekyll rebuild
cd $CWD
bundle exec jekyll contentful
bundle exec jekyll build

# Push newly built repository
cp -r $CWD/_build/* /tmp/build # or $CWD/_site

cd /tmp/build

git config --global user.email "amcg10@gmail.com"
git config --global user.name "Austin McGuire"

git add .
git commit -m "Automated Rebuild"
git push -f origin gh-pages