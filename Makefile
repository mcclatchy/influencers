template:
	mkdir -p public
	cp -r assets public/
	./bin/loopit -data data/names.json template.html > public/index.html

server: template 
	./bin/webserver -d public
