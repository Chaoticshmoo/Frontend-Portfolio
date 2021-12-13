// Created by Alexander Foerster using vanilla JavaScript

// Site's Navigation

const mobileView = 1039 // Global variable to determine if the window is small enough for mobile or larger for desktop view settings. It is used in showMenu and isMobileView functions.

/* Shows/hides the nav and social media menus whenever the hamburger button is clicked. It does such by rotating the main container of content off to the side as the menu's slide/fade into view. When the hamburger menu is clicked a second time the process reverts itself. */
function showMenu() {
	const hamburgerContainer = document.querySelector("#hamburger-container")
	const mainContainer = document.querySelector(".main-container")
	const headerContainer = document.querySelector(".header-container")
	const socialMediaMenu = document.querySelector(".social-media-items")
	const socialMediaIcons = document.querySelector(".social-media-icons")
	const menuItems = document.querySelector(".menu-items")

	hamburgerContainer.addEventListener("click", function() {
		hamburgerContainer.classList.toggle("show-menu")
		menuItems.classList.toggle("show-menu")
		if (window.innerWidth < mobileView) {
			mainContainer.classList.toggle("show-menu")
			socialMediaMenu.classList.toggle("show-menu")
		}
		if (window.innerWidth >= mobileView) {
			headerContainer.classList.toggle("show-menu")
			socialMediaIcons.classList.toggle("show-menu")
		}
		hamburgerToX()
	})
	isMobileView()
}

/* Adds the nav-menu class to the main-container element if the window size is in mobile view. This is needed because the main-container element is only part of the navigation menu while in mobile view. This is also done by using the nav-menu class.*/
function isMobileView() {
	const mainContainer = document.querySelector(".main-container")
	if (window.innerWidth < mobileView) {
		mainContainer.classList.add("nav-menu")
	}
	if (window.innerWidth >= mobileView) {
		mainContainer.classList.remove("nav-menu")
	}
}

// Changes the three lines that make the hamburger menu into an X to indicate if clicked it will close the menu.
function hamburgerToX() {
	const allHamburgerLines = document.querySelectorAll(".hamburger-lines")
	for (let i = 0; i < allHamburgerLines.length; i++) {
		const hamLines = allHamburgerLines[i]
		hamLines.classList.toggle("show-menu")
	}
}

// Closes the navigation menu when clicking anywhere outside of the navigation elements.
// nav-menu is a css class that is only used for JS to identify which html elements are part of the navigation menu.
window.onclick = function isClickOutsideNavMenu(event) {
	const allNavMenuElements = document.querySelectorAll(".nav-menu")
	if (!event.target.matches(".show-menu")) {
		for (let i = 0; i < allNavMenuElements.length; i++) {
			const openNavMenuElements = allNavMenuElements[i]
			if (openNavMenuElements.classList.contains("show-menu")) {
				openNavMenuElements.classList.remove("show-menu")
			}
		}
	}
}

// Site's Main Container: Projects, Resume, and Get in Touch secions

// Button Behavior: Tells buttons to change based on what the user is doing.
function buttonControl() {
	const hoverColor = "hsl(210, 12%, 12%)"
	const originalColor = "hsl(33, 100%, 50%)"
	const btns = document.querySelectorAll("button")
	for (let i = 0; i < btns.length; i++) {
		const allBtns = btns[i]
		allBtns.addEventListener("mouseover", function(event) {
			event.target.style.backgroundColor = hoverColor
		})
		allBtns.addEventListener("mouseout", function(event) {
			event.target.style.backgroundColor = originalColor
		})
	}
}

showMenu()
buttonControl()
