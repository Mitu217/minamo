build-android-shared:
	cd library && gomobile bind -target android && cd -

build-osx-shared:
	go build --buildmode=c-shared -o server.dylib server.go

