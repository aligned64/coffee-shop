package main

type cup_size int

const (
	SMALL cup_size = iota
	MEDIUM
	LARGE
)

type Cup struct {
	Product `json:"product"`
	Size    cup_size `json:"size"`
}
