import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unsplash-search',
  templateUrl: './unsplash-search.component.html',
  styleUrls: ['./unsplash-search.component.css']
})
export class UnsplashSearchComponent implements OnInit {

	prop:string = "Hey!";

	searchUnsplash(searching){
		let url = "https://api.unsplash.com/search/photos/?client_id=d8ba850a24e78fb254312b97c575e9dac5e07887bb961e906d0f5f681cf8df6a&query=" + searching;
		this.http.get(url).then( data => {
			console.log(data);
		});
	}

	constructor(private http: HttpClient) { }

	constructor() { }

	ngOnInit() {
	}

}
