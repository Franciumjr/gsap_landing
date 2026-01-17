const navLinks = [{
    name: "Home",
    link: "#home"
}, {
    name: "About",
    link: "#about"
},  {
    name: "Contact",
    link: "#contact"  
}];

const cocktailLists = [
 {
	name: "Chapel Hill Shiraz",
	country: "AU",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Caten Malbee",
	country: "AU",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Rhino Pale Ale",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Irish Guinness",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const mockTailLists = [
 {
	name: "Tropical Bloom",
	country: "US",
	detail: "Battle",
	price: "$10",
 },
 {
	name: "Passionfruit Mint",
	country: "US",
	detail: "Battle",
	price: "$49",
 },
 {
	name: "Citrus Glow",
	country: "CA",
	detail: "750 ml",
	price: "$20",
 },
 {
	name: "Lavender Fizz",
	country: "IE",
	detail: "600 ml",
	price: "$29",
 },
];

const features = [
	"Reclaimed Wood Accents",
	"Warm Amber Lighting",
	"Artisanal Heritage Linens",
]

const goods = [
	"Scenic Riverfront Vistas",
	"Historic Heritage Walkway",
	"Riverside Golden Hour",
]

const rooms = [
	{
		id: 1,
		name: "CLASSIC",
		image: "/images/classic.webp",
		title: "Queen sized bed that comes with/without window"
	},
	{
		id: 2,
		name: "SINGLE",
		image: "/images/single-room.webp",
		title: "Single bed that comes with / without window"
	},
	{
		id: 3,
		name: "DELUXE",
		image: "/images/deluxe.jpg",
		title: "Queen sized bed with a working desk"
	},
	{
		id: 4,
		name: "DOUBLE",
		image: "/images/double.jpg",
		title: "Queen sized bed with their private bathroom",
	}
]


export { navLinks , cocktailLists, mockTailLists, features, goods, rooms};