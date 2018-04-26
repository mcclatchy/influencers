west: public
	loopit -data data/west.json template.html > public/index.html

public:
	mkdir public
	ln -s ../assets public/

server: west 
	./bin/webserver -d public

clean:
	rm -rf public
