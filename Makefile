all: carolinas east midwest west

carolinas: carolinas.images
	csv2json markets/$@.csv > data/$@.json

east: east.images
	csv2json markets/$@.csv > data/$@.json

midwest: midwest.images
	csv2json markets/$@.csv > data/$@.json

west: west.images
	csv2json markets/$@.csv > data/$@.json

%.images:
	mkdir -p static/img/$*/1200 static/img/$*/600
	cd markets/$*/photos && mogrify -path ../../../static/img/$*/1200 \
		-format 'jpg' -colorspace gray -brightness-contrast 3,20 -resize '1200x1200^' -quality 65 -strip * 
	cd static/img/$*/1200 && mogrify -path ../600 -resize '600x600^' *

sandbox:
	hugo
	mv /localhost/projects/sandbox/influencers /tmp/
	mv public /localhost/projects/sandbox/influencers
