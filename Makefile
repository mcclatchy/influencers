template: public
	./bin/loopit -data data/names.json template.html > public/index.html

public:
	mkdir public
	ln -s ../assets public/

server: template 
	./bin/webserver -d public

clean:
	rm -rf public
