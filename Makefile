carolinas: public
	loopit -data data/carolinas.json template.html > public/index.html

west: public
	loopit -data data/west.json template.html > public/index.html

public:
	mkdir public
	ln -s ../assets public/

server: west 
	./bin/webserver -d public

clean:
	rm -rf public

images:
	cd assets/originals && mogrify -path ../1200 -format 'jpg' -colorspace gray -brightness-contrast 3,20 -resize '1200x1200^' -quality 65 -strip *
	cd assets/1200 && mogrify -path ../600 -resize '600x600^' *
