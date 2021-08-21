import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm:String = "";

  constructor(private route:ActivatedRoute, private router:Router) { 
    this.route.params.subscribe(params =>{
      this.searchTerm = params.searchTerm;
    });
  }

  ngOnInit(): void {
  }

  public search():void{
    if(this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm);
  }

}
