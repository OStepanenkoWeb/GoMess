package main

import (
	"fmt"
	"log"
	"net/http"
)

func wsEndpoint(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Ws service")
}

func setupRoutes() {
	http.HandleFunc("/ws", wsEndpoint)
}

func main() {
	fmt.Println("web-socket server starting...")
	setupRoutes()
	log.Fatal(http.ListenAndServe(":8088", nil))
}