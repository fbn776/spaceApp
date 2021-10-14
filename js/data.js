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
	{ name: 'Sun', thumbnail: 'img/images/stars/Sun.jpg', onclickID:'SunWindow' },
	{ name: 'Sirius A', thumbnail: 'img/images/stars/Sirius A.jpg', onclickID: 'SiriusAWindow' },
	{ name: 'Betelgeuse', thumbnail: 'img/images/stars/Betelgeuse.jpg', onclickID: 'BetelgeuseWindow' },
	{ name: 'Rigel', thumbnail: 'img/images/stars/Rigel.jpg', onclickID: 'RigelWindow' },
	{ name: 'Arcturus', thumbnail: 'img/images/stars/Arcturus.jpg', onclickID: 'ArcturusWindow' },
	{ name: 'Vega', thumbnail: 'img/images/stars/Vega.jpg', onclickID: 'VegaWindow' },
	{ name: 'Canopus', thumbnail: 'img/images/stars/Canopus.jpg', onclickID: 'CanopusWindow' },
	{ name: 'Proxima Centauri', thumbnail: 'img/images/stars/Proxima Centauri.jpg', onclickID: 'ProximaCentauriWindow' },
	{ name: 'Alpha Centauri A', thumbnail: 'img/images/stars/Alpha Centauri A.jpg', onclickID: 'AlphaCentauriAWindow' },
	{ name: 'VY Canis Majoris', thumbnail: 'img/images/stars/VY Canis Majoris.jpg', onclickID: 'VyCanisMajorisWindow' },
	{ name: 'Bellatrix', thumbnail: 'img/images/stars/Bellatrix.jpg', onclickID: 'BellatrixWindow' }
];
//Sort the stars data in alphabetical order;
starsCardsData.sort(function(a, b) {
	if (a.name < b.name) { return -1; }
	if (a.name > b.name) { return 1; }
	return 0;
});


const galaxiesCardsData =  [
	{name: 'Milky Way', thumbnail: 'img/images/galaxies/Milky Way.jpg', onclickID: 'MilkyWayWindow'},
	{name: 'Andromeda Galaxy', thumbnail: 'img/images/galaxies/Andromeda Galaxy.jpg', onclickID: 'AndromedaGalaxyWindow'},
	{name: 'Sombrero Galaxy', thumbnail: 'img/images/galaxies/Sombrero Galaxy.jpg', onclickID: 'SombreroGalaxyWindow'},
	{name: 'Messier 81', thumbnail: 'img/images/galaxies/Messier 81.jpg', onclickID: 'Messier81Window'},
	{name: 'Large Magellanic Cloud', thumbnail: 'img/images/galaxies/Large Magellanic Cloud.jpg', onclickID: 'LargeMagellanicCloudWindow'},
	{name: 'Whirlpool Galaxy', thumbnail: 'img/images/galaxies/Whirlpool Galaxy.jpg', onclickID: 'WhirlpoolGalaxyWindow'},
	{name: 'Triangulum Galaxy', thumbnail: 'img/images/galaxies/Triangulum Galaxy.jpg', onclickID: 'TriangulumGalaxyWindow'},
	{name: 'Pinwheel Galaxy', thumbnail: 'img/images/galaxies/Pinwheel Galaxy.jpg', onclickID: 'PinwheelGalaxyWindow'},
	{name: 'Cartwheel Galaxy', thumbnail: 'img/images/galaxies/Cartwheel Galaxy.jpg', onclickID: 'CartwheelGalaxyWindow'},
	{name: 'Messier 83', thumbnail: 'img/images/galaxies/Messier 83.jpg', onclickID: 'Messier83Window'},
	{name: 'Tadpole Galaxy', thumbnail: 'img/images/galaxies/Tadpole Galaxy.jpg', onclickID: 'TadpoleGalaxyWindow'}
];
galaxiesCardsData.sort(function(a, b) {
	if (a.name < b.name) { return -1; }
	if (a.name > b.name) { return 1; }
	return 0;
});

const spaceProbesCardsData = [
	{name: 'Voyager 2', thumbnail: 'img/images/space probes/Voyager 2.jpg', onclickID: 'Voyager2Window'},
	{name: 'Voyager 1', thumbnail: 'img/images/space probes/Voyager 1.jpg', onclickID: 'Voyager1Window'},
	{name: 'Pioneer 11', thumbnail: 'img/images/space probes/Pioneer 11.jpg', onclickID: 'Pioneer11Window'},
	{name: 'Pioneer 10', thumbnail: 'img/images/space probes/Pioneer 10.jpg', onclickID: 'Pioneer10Window'},
	{name: 'Galileo', thumbnail: 'img/images/space probes/Galileo.jpg', onclickID: 'GalileoWindow'},
	{name: 'Juno', thumbnail: 'img/images/space probes/Juno.jpg', onclickID: 'JunoWindow'},
	{name: 'Mariner 10', thumbnail: 'img/images/space probes/Mariner 10.jpg', onclickID: 'Mariner10Window'},
	{name: 'Curiosity rover', thumbnail: 'img/images/space probes/Curiosity rover.jpg', onclickID: 'CuriosityRoverWindow'},
	{name: 'InSight Lander', thumbnail: 'img/images/space probes/InSight Lander.jpg', onclickID: 'InsightLanderWindow'},
	{name: 'New Horizons', thumbnail: 'img/images/space probes/New Horizons.jpg', onclickID: 'NewHorizonsWindow'},
	{name: 'Cassini', thumbnail: 'img/images/space probes/Cassini.jpg', onclickID: 'CassiniWindow'},
	{name: 'Parker Solar Probe', thumbnail: 'img/images/space probes/Parker Solar Probe.jpg', onclickID: 'ParkerSolarProbeWindow'}
];
spaceProbesCardsData.sort(function(a, b) {
	if (a.name < b.name) { return -1; }
	if (a.name > b.name) { return 1; }
	return 0;
});


const astronomicalObjectsCardsData = [
	{name: "Halley's Comet", thumbnail: "img/images/astronomical objects/Halley's Comet.jpg", onclickID: "Halley'SCometWindow"},
	{name: 'Comet Encke', thumbnail: 'img/images/astronomical objects/Comet Encke.jpg', onclickID: 'CometEnckeWindow'},
	{name: '10 Hygiea', thumbnail: 'img/images/astronomical objects/10 Hygiea.jpg', onclickID: '10HygieaWindow'},
	{name: '2 Pallas', thumbnail: 'img/images/astronomical objects/2 Pallas.jpg', onclickID: '2PallasWindow'},
	{name: '4 Vesta', thumbnail: 'img/images/astronomical objects/4 Vesta.jpg', onclickID: '4VestaWindow'},
	{name: 'Horsehead Nebula', thumbnail: 'img/images/astronomical objects/Horsehead Nebula.jpg', onclickID: 'HorseheadNebulaWindow'},
	{name: 'Crab Nebula', thumbnail: 'img/images/astronomical objects/Crab Nebula.jpg', onclickID: 'CrabNebulaWindow'},
	{name: 'Sagittarius A*', thumbnail: 'img/images/astronomical objects/Sagittarius A_.jpg', onclickID: 'SagittariusA*Window'},
	{name: 'Holmberg 15A', thumbnail: 'img/images/astronomical objects/Holmberg 15A.jpg', onclickID: 'Holmberg15AWindow'}
];
