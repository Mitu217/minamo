package main

import (
	"C"
	"fmt"
	"os"

	"github.com/Mitu217/minamo/player"
	"github.com/shiena/ansicolor"
)

//export colorprint
func colorprint(cstr *C.char) {
	w := ansicolor.NewAnsiColorWriter(os.Stdout)
	text := "%sforeground %s " + C.GoString(cstr) + " %s %sbackground%s\n"
	fmt.Fprintf(w, text, "\x1b[31m", "\x1b[1m", "\x1b[21m", "\x1b[41;32m", "\x1b[0m")
	fmt.Fprintf(w, text, "\x1b[32m", "\x1b[1m", "\x1b[21m", "\x1b[42;31m", "\x1b[0m")
	fmt.Fprintf(w, text, "\x1b[33m", "\x1b[1m", "\x1b[21m", "\x1b[43;34m", "\x1b[0m")
	fmt.Fprintf(w, text, "\x1b[34m", "\x1b[1m", "\x1b[21m", "\x1b[44;33m", "\x1b[0m")
	fmt.Fprintf(w, text, "\x1b[35m", "\x1b[1m", "\x1b[21m", "\x1b[45;36m", "\x1b[0m")
	fmt.Fprintf(w, text, "\x1b[36m", "\x1b[1m", "\x1b[21m", "\x1b[46;35m", "\x1b[0m")
	fmt.Fprintf(w, text, "\x1b[37m", "\x1b[1m", "\x1b[21m", "\x1b[47;30m", "\x1b[0m")
}

//export play
func play(cstr *C.char) {
	path := C.GoString(cstr)
	if err := player.Play(path); err != nil {
		fmt.Printf(err.Error())
	}
	fmt.Printf(path)
}

func main() {
}
