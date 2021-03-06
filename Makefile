all: carolinas east midwest west

carolinas: 
	csv2json markets/$@.csv > data/$@.json

east: 
	csv2json markets/$@.csv > data/$@.json

midwest: 
	csv2json markets/$@.csv > data/$@.json

west: 
	csv2json markets/$@.csv > data/$@.json

%.images:
	mkdir -p static/img/$*/1200 static/img/$*/600
	cd markets/$*/photos && mogrify -path ../../../static/img/$*/1200 \
		-format 'jpg' -colorspace gray -brightness-contrast 3,17 -resize '1200x1200^' -density 72 -quality 30 -strip * 
	cd static/img/$*/1200 && mogrify -path ../600 -resize '600x600^' *

sandbox:
	hugo
	rm -rf /tmp/influencers
	mv /localhost/projects/sandbox/influencers /tmp/
	mv public /localhost/projects/sandbox/influencers

strips:
	cd static/img/promo && ./makestrips
