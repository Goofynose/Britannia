var nodes = [];
var wordMap = {
	'airfoil': 'aerofoil',
	'Airfoil': 'Aerofoil',
	'airplane': 'aeroplane',
	'Airplane': 'Aeroplane',
	'aluminum': 'aluminium',
	'Aluminum': 'Aluminium',
	'analog': 'analogue',
	'Analog': 'Analogue',
	'analyze': 'analyse',
	'Analyze': 'Analyse',
	'anise': 'aniseed',
	'Anise': 'Aniseed',
	'appetizer': 'starter',
	'Appetizer': 'Starter',
	'apologize': 'apologise',
	'Apologize': 'Apologise',
	'beet': 'beetroot',
	'Beet': 'Beetroot',
	'behavior': 'behaviour',
	'Behavior': 'Behaviour',
	'breathalyze': 'breathalyse',
	'Breathalyze': 'Breathalyse',
	'catalog': 'catalogue',
	'Catalog': 'Catalogue',	
	'center': 'centre',
	'Center': 'Centre',
	'closet': 'wardrobe',
	'Closet': 'Wardrobe',
	'colonize':'colonise',
	'Colonize':'Colonise',
	'colonization':'colonisation',
	'Colonization':'Colonisation',
	'color': 'colour',
	'Color': 'Colour',
	'corn': 'maize',
	'Corn': 'Maize',
	'cornstarch': 'cornflour',
	'Cornstarch': 'Cornflour',
	'counterclockwise': 'anticlockwise',
	'Counterclockwise': 'Anticlockwise',
	'defense': 'defence',
	'Defense': 'Defence',
	'dialog': 'dialogue',
	'Dialog': 'Dialogue',
	'diaper': 'nappy',
	'Diaper': 'Nappy',
	'drugstore': 'chemist',
	'Drugstore': 'Chemist',
	'eggplant': 'aubergine',
	'Eggplant': 'Aubergine',
	'elevator': 'lift',
	'Elevator': 'Lift',
	'estrogen': 'oestrogen',
	'Estrogen': 'Oestrogen',
	'fiber': 'fibre',
	'Fiber': 'Fibre',
	'flavor': 'flavour',
	'Flavor': 'Flavour',
	'freeway': 'motorway',
	'Freeway': 'Motorway',
	'fueled': 'fuelled',
	'Fueled': 'Fuelled',
	'fueling': 'fuelling',
	'Fueling': 'Fuelling',
	'gasoline': 'petrol',
	'Gasoline': 'Petrol',
	'humor': 'humour',
	'Humor': 'Humour',
	'labor': 'labour',
	'Labor': 'Labour',
	'ladybug': 'ladybird',
	'Ladybug': 'Ladybird',
	'lawyer': 'solicitor',
	'Lawyer': 'Solicitor',
	'leukemia': 'leukaemia',
	'Leukemia': 'Leukaemia',
	'license': 'licence',
	'License': 'Licence',
	'liter': 'litre',
	'Liter': 'Litre',
	'lollipop': 'lolly',
	'Lollipop': 'Lolly',
	'lumber': 'timber',
	'Lumber': 'Timber',
	'mailbox': 'postbox',
	'Mailbox': 'Postbox',
	'maneuver': 'manoeuvre',
	'Maneuver': 'Manoeuvre',
	'math': 'maths',
	'Math': 'Maths',
	'neighbor': 'neighbour',
	'Neighbor': 'Neighbour',
	'odometer': 'milometer',
	'Odometer': 'Milometer',
	'offense': 'offence',
	'Offense': 'Offence',
	'organize': 'organise',
	'Organize': 'Organise',
	'paralyze': 'paralyse',
	'Paralyze': 'Paralyse',
	'pediatric': 'paediatric',
	'Pediatric': 'Paediatric',
	'pretense': 'pretence',
	'Pretense': 'Pretence',
	'railroad': 'railway',
	'Railroad': 'Railway',
	'recognize': 'recognise',
	'Recognize': 'Recognise',
	'rutabaga': 'swede',
	'Rutabaga': 'Swede',
	'sedan': 'saloon',
	'Sedan': 'Saloon',
	'sidewalk': 'pavement',
	'Sidewalk': 'Pavement',
	'sled': 'sledge',
	'Sled': 'Sledge',
	'sneakers': 'trainers',
	'Sneakers': 'Trainers',
	'soccer': 'football',
	'Soccer': 'Football',
	'stovetop': 'hob',
	'Stovetop': 'Hob',
	'stroller': 'pram',
	'Stroller': 'Pram',
	'sweater': 'jumper',
	'Sweater': 'Jumper',
	'theater': 'theatre',
	'Theater': 'Theatre',
	'tire': 'tyre',
	'Tire': 'Tyre',
	'traveled': 'travelled',
	'Traveled': 'Travelled',
	'traveling': 'travelling',
	'Traveling': 'Travelling',
	'traveler': 'traveller',
	'Traveler': 'Traveller',
	'truck': 'lorry',
	'Truck': 'Lorry',
	'undershirt': 'vest',
	'Undershirt': 'Vest',
	'vacation': 'holiday',
	'Vacation': 'Holiday',
	'vacationer': 'holidaymaker',
	'Vacationer': 'Holidaymaker',
	'vest': 'waistcoat',
	'Vest': 'Waistcoat',
	'zucchini': 'courgette',
	'Zucchini': 'Courgette',
};
var regex = new RegExp(Object.keys(wordMap).join("|"),"gi");

if( document.readyState !== 'loading' ) {
    //console.log( 'document is already ready, just execute code here' );
    myInitCode();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        //console.log( 'document was not ready, place code here' );
        myInitCode();
    });
}

function myInitCode() {
	var walker = document.createTreeWalker(
	document.body,
	NodeFilter.SHOW_TEXT,
	function(node) {
		var matches = node.textContent.match(regex);

		if(matches) { 
			return NodeFilter.FILTER_ACCEPT;
		} else {
			return NodeFilter.FILTER_SKIP;
		}
	},
	false);

	while(walker.nextNode()) {
		nodes.push(walker.currentNode);
	}

	for(var i = 0; node=nodes[i] ; i++) {
		if(node.parentNode){
			node.parentNode.innerHTML = node.parentNode.innerHTML.replace(regex, function(match) {
				return wordMap[match];
			});
		}
	}
}