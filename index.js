const keysPressed = {}
document.addEventListener("keydown", (e) => { 
	keysPressed[e.key] = true
})
document.addEventListener("keyup", (e) => { 
	keysPressed[e.key] = false
})
