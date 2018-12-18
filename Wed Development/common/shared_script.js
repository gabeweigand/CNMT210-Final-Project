/*  JavaScript file  */
/* Title  Final Project Navigation & Slideshow Script
  @author: Gabriel Weigand
  creation date: 12/13/18
  modified date: 12/16/18
	*/

/* declare variables for javascript */
var navOpen = false;
var slide = 0;
var slideTracker = 1;


/* navigations controls */
function openNav() {
	document.getElementById("navContainer").style.width = "250px";
	document.getElementById("pageContainer").style.marginLeft = "250px";
	document.getElementById("navButton").style.padding = "1% 0 0 260px";
	document.getElementById("navButton").style.transform = "rotateZ(360deg)";
	navOpen = true;
}	/* set width of nav sidebar & left margin of page content to 250px then rotates & adds padding to nav button */

function closeNav() {
	document.getElementById("navContainer").style.width = "0";
	document.getElementById("pageContainer").style.marginLeft = "0";
	document.getElementById("navButton").style.padding = "1% 0 0 1%";
	document.getElementById("navButton").style.transform = "rotateZ(-360deg)";
	navOpen = false;
}	/* set width of nav sidebar & left margin of page content to 0 then rotates & resets padding to nav button */

function navControl() {
	if (navOpen) {
		closeNav();
	} else {
		openNav();
	}
}	/* checks if nav is currently open, if true nav closes, if flase nav opens */


/* slideshow controls */
function nextSlide() {
	if (slide == -900) {
		slide = 0;
		slideTracker = 1;
		document.getElementById("slide#").innerHTML = slideTracker + "/10";
		document.getElementById("slide").style.left = slide + "%";
	} else {
		slide = slide - 100;
		slideTracker = slideTracker + 1;
		document.getElementById("slide#").innerHTML = slideTracker + "/10";
		document.getElementById("slide").style.left = slide + "%";
	}
}	/* if slideshow is on last slide values are set to default otherwise 
	slide tracker is increased by 1 and slide is moved left -100% */

function lastSlide() {
	if (slide == 0) {
		slide = -900;
		slideTracker = 10;
		document.getElementById("slide#").innerHTML = slideTracker + "/10";
		document.getElementById("slide").style.left = slide + "%";
	} else {
		slide = slide + 100;
		slideTracker = slideTracker - 1;
		document.getElementById("slide#").innerHTML = slideTracker + "/10";
		document.getElementById("slide").style.left = slide + "%";
	}
}	/* if slideshow is on first slide values are set to max otherwise 
	slide tracker is decreased by 1 and slide is moved left 100% */

