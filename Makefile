template:
	mkdir -p public
	cp -r assets public/
	./bin/loopit -data data/names.json template.html > public/index.html

server: 
	./bin/webserver -d public
