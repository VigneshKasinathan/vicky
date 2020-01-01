import { Component, OnInit, HostBinding, Inject, HostListener } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }




  constructor() { }


  ngOnInit(): void {

    $(function() {
      var header = $(".navbar");
    
      $(window).scroll(function() {    
          var scroll = $(window).scrollTop();
          if (scroll >= 50) {
              header.addClass("scrolled");
          } else {
              header.removeClass("scrolled");
          }
      });
      
    });
  }




}
