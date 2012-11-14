###
Edit settings here. 
###

width = 1200
height = 1200
margin = (width - 978) / 2

settings = {

	###
	document setup
	###

	width
	height

	###
	guides
	###

	guides: {
		horizontal: [
			100
		]
		vertical: [
			margin,
			width - margin
		]
	}

	###
	layers
	###
	
	layers: [
		{
			name: 'HEADER'
			layers: [
				{ 
					name: 'logo'
					layers: [
						{ name: 'logo' }
					]
				}
			]
		}
		{
			name: 'BODY'
			layers: []
		}
		{
			name: 'FOOTER'
			layers: []
		}
		{
			name: 'BACKGROUND'
			layers: [
				{ name: 'background' }
			]
		}
	]
}