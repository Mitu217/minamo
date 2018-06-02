package minamo

import (
	"io"
	"os"

	"github.com/hajimehoshi/go-mp3"
	"github.com/hajimehoshi/oto"
)

func Play(path string) error {
	f, err := os.Open(path)
	if err != nil {
		return err
	}
	defer f.Close()

	d, err := mp3.NewDecoder(f)
	if err != nil {
		return err
	}
	defer d.Close()

	p, err := oto.NewPlayer(d.SampleRate(), 2, 2, 65536)
	if err != nil {
		return err
	}
	defer p.Close()

	if _, err := io.Copy(p, d); err != nil {
		return err
	}

	return nil
}

func Hello() string {
	return "Hello, world!"
}
