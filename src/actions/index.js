import axios from 'axios';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const FETCH_VIDEO = 'FETCH_VIDEO';
export const FETCH_RESOURCE_TYPES = 'FETCH_RESOURCE_TYPES';
export const FETCH_RESOURCES = 'FETCH_RESOURCES';
export const FETCH_RESOURCE = 'FETCH_RESOURCE';


var resource_types=[{name: "medical"}, {name: "legal"}, {name: "housing"}]

var resources=[
	{id: 0, name: "Gerald", type: "medical", description: "Good dude", lat: 53, lon: 42},
	{id: 1, name: "Coolio", type: "medical", description: "My man", lat: 24, lon: 112},
	{id: 2, name: "Fousey", type: "medical", description: "Cool homie", lat: 107, lon: 48}
]

export function fetchResourceTypes() {
	const request = resource_types;
	console.log(request);

	return{
		type: FETCH_RESOURCE_TYPES,
		data: request
	}
}

export function fetchResources() {
	const request = resources;

	return{
		type: FETCH_RESOURCES,
		data: request
	}
}

export function fetchResource(id) {
	const request = resources[id];

	return{
		type: FETCH_RESOURCE,
		data: request
	}
}