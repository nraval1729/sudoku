$(document).ready(function() {
	 alert("Hey!");
	 getAndDrawPuzzle();
});

function getAndDrawPuzzle() {
	$.get("/puzzle", function(data) {
		drawPuzzle(data['rows'][0]['puzzles']);
	});
}

function drawPuzzle(puzzle) {
	drawGrid();
	alert(puzzle);
}

function drawGrid() {
	
}