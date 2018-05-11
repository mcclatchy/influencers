all: midwest east carolinas west index

index: public
	cp index.html public/index.html

midwest: public
	loopit -data data/midwest.json template.html > public/midwest.html

east: public
	loopit -data data/east.json template.html > public/east.html

carolinas: public
	loopit -data data/carolinas.json template.html > public/carolinas.html

west: public
	loopit -data data/west.json template.html > public/west.html

public:
	mkdir public
	ln -s ../assets public/

clean:
	rm -rf public

images:
	cd assets/originals && mogrify -path ../1200 -format 'jpg' -colorspace gray -brightness-contrast 3,20 -resize '1200x1200^' -quality 65 -strip *
	cd assets/1200 && mogrify -path ../600 -resize '600x600^' *
