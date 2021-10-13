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
		onclickID: "starsWindow"
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
//Removed because, too little time.
/*	{
		title: "Rockets",
		description: "A rocket is a spacecraft, aircraft, vehicle or projectile that obtains thrust from a rocket engine.",
		thumbnail: "img/thumbnails/rocket.png",
		onclickID: "rocketsWindow"
	},*/
	{
		title: "Space Probes",
		description: " A space probe, or simply probe, is a robotic spacecraft that doesn't orbit the Earth, but instead explores farther into outer space. ",
		thumbnail: "img/thumbnails/spaceProbe.png",
		onclickID: "spaceProbesWindow"
	}
];



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

const starsCardsData = [
	{ name: 'Sun', thumbnail: 'img/images/stars', onclickID:'SunWindow' },
	{ name: 'Sirius A', thumbnail: 'img/images/stars', onclickID: 'SiriusAWindow' },
	{ name: 'Betelgeuse', thumbnail: 'img/images/stars', onclickID: 'BetelgeuseWindow' },
	{ name: 'Rigel', thumbnail: 'img/images/stars', onclickID: 'RigelWindow' },
	{ name: 'Arcturus', thumbnail: 'img/images/stars', onclickID: 'ArcturusWindow' },
	{ name: 'Vega', thumbnail: 'img/images/stars', onclickID: 'VegaWindow' },
	{ name: 'Canopus', thumbnail: 'img/images/stars', onclickID: 'CanopusWindow' },
	{ name: 'Proxima Centauri', thumbnail: 'img/images/stars', onclickID: 'ProximaCentauriWindow' },
	{ name: 'Alpha Centauri A', thumbnail: 'img/images/stars', onclickID: 'AlphaCentauriAWindow' },
	{ name: 'VY Canis Majoris', thumbnail: 'img/images/stars', onclickID: 'VyCanisMajorisWindow' },
	{ name: 'Bellatrix', thumbnail: 'img/images/stars', onclickID: 'BellatrixWindow' }
];
//Sort the stars data in alphabetical order;
starsCardsData.sort(function(a, b) {
	if (a.name < b.name) { return -1; }
	if (a.name > b.name) { return 1; }
	return 0;
});