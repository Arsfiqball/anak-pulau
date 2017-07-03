if [ ! -d build/osmjs ]; then
	git clone "https://gist.github.com/7801bcdc141a98e06b223af58905e12d.git" build/osmjs -q
else
	cd build/osmjs
	git fetch origin -q
	git pull -q
	cd ../..
fi

