const homePageCardsData = [
	{
		title: "Solar System",
		description: "The Solar System is the gravitationally bound system of the Sun and the objects that orbit it, either directly or indirectly.",
		thumbnail: "img/thumbnails/solarSystem.png",
		onclickID: "solarSystemWindow",
	},
	{
		title: "Stars",
		description: " A star is an astronomical object consisting of a luminous spheroid of plasma held together by its own gravity ",
		thumbnail: "img/thumbnails/star.jpg",
		onclickID:"starsWindow"
	},
	{
		title: "Galaxies",
		description: " A galaxy is a gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter ",
		thumbnail: "img/thumbnails/galaxy.png",
		onclickID: "galaxiesWindow",
	},
	{
		title: "Astronomical objects",
		description: " An astronomical object or celestial object is a naturally occurring physical entity, association, or structure that exists in the observable universe. ",
		thumbnail: "img/thumbnails/astronomicalObjects.png",
		onclickID: "astronomicalObjectsWindow"
	},
	{
		title: "Rockets",
		description: "A rocket is a spacecraft, aircraft, vehicle or projectile that obtains thrust from a rocket engine.",
		thumbnail: "img/thumbnails/rocket.png",
		onclickID: "rocketsWindow"
	},
	{
		title: "Space Probes",
		description: " A space probe, or simply probe, is a robotic spacecraft that doesn't orbit the Earth, but instead explores farther into outer space. ",
		thumbnail: "img/thumbnails/spaceProbe.png",
		onclickID: "spaceProbesWindow"
	}
];

const secondaryMenuData = [
	/*
	
name,
pageID,
title,
sideImg,
desc,
listHeader,
cardsContId,
}
*/
	{
		name:"solarSystem",
		pageID:"solarSystemWindow",
		title:"Solar System",
		sideImg:"img/images/solar system/solar_system.jpg",
		desc:"The Solar System is the gravitationally bound system of the Sun and the objects that orbit it, either directly or indirectly. Of the objects that orbit the Sun directly, the largest are the eight planets, with the remainder being smaller objects, the dwarf planets and small Solar System bodies. Of the objects that orbit the Sun indirectly—the natural satellites—two are larger than the smallest planet, Mercury.The Solar System formed 4.6 billion years ago from the gravitational collapse of a giant interstellar molecular cloud. The vast majority of the system's mass is in the Sun, with the majority of the remaining mass contained in Jupiter. The four smaller inner system planets, Mercury, Venus, Earth and Mars, are terrestrial planets, being primarily composed of rock and metal. The four outer system planets are giant planets, being substantially more massive than the terrestrials.",
		listHeader:"Solar system objects:",
		cardsContId:"solar-system-cards-cont",
	}
]

const solarSystemCardsData = [
	{
		name: "Mercury",
		thumbnail: "img/images/solar system/Mercury.jpg",
		onclickID: "planetMercuryWindow"
	},
	{
		name: "Venus",
		thumbnail: "img/images/solar system/Venus.jpg",
		onclickID: "planetVenusWindow"
	},
	{
		name: "Earth",
		thumbnail: "img/images/solar system/Earth.jpg",
		onclickID: "planetEarthWindow"

	},
	{
		name: "Mars",
		thumbnail: "img/images/solar system/Mars.jpg",
		onclickID: "planetMarsWindow"
	},
	{
		name: "Jupiter",
		thumbnail: "img/images/solar system/Jupiter.jpg",
		onclickID: "planetJupiterWindow"
	},
	{
		name: "Saturn",
		thumbnail: "img/images/solar system/Saturn.jpg",
		onclickID: "planetSaturnWindow"
	},
	{
		name: "Uranus",
		thumbnail: "img/images/solar system/Uranus.jpg",
		onclickID: "planetUranusWindow"
	},
	{
		name: "Neptune",
		thumbnail: "img/images/solar system/Neptune.jpg",
		onclickID: "planetNeptuneWindow"
	}
];