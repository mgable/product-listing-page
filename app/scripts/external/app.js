/* global $, _, angular */

(function(){
	"use strict";
	angular.module("productListingPage",[]);

	angular.module("productListingPage").controller("Main", function($scope){
		console.info("hey!!!");

	}).directive("expand", function(){
		return {
			restrict: "AE",
			scope: {},
			controller: function($scope, $element, $attrs){

				var target = $($element).find("ul");

				this.open = function(){
					target.css("height", "auto");
				};

				this.close = function(){
					target.css("height", "130px");
				};
			}
		};
	}).directive("expander", function(){
		return {
			restrict: "AE",
			require: "^expand",
			scope:true,
			link: function(scope, element, attrs, ctrl){
				var expanded = false,
					labelElm = angular.element(element);

				labelElm.html("View All &gt;");

				ctrl.close();

				scope.action = function(){
					if (expanded){
						labelElm.html("View All &gt;");
						ctrl.close();
					} else {
						labelElm.html("View Less &gt;");
						ctrl.open();
					}
					expanded = !expanded;
				};
				
			}
		}
	}).directive("collapse", function(){
		return{
			restrict: "AE",
			template: "<span><span>{{title}}</span><a class='right toggle' ng-click='toggle()'>&nbsp;<i class='fa fa-chevron-circle-right' aria-hidden='true'></i></a><span>",
			scope: {
				title: "@"
			},
			link:function(scope,element,attrs){
				var target = angular.element(element),
				 	closed = true;
				
				scope.toggle = function(){
					if (closed){
						target.addClass("my-show");		
					} else {
						target.removeClass("my-show");
					}
					closed = !closed;
				}
			}
		}
	});


	$(function() {
		try {
			$( "#slider-range" ).slider({
				range: true,
				min: 0,
				max: 300,
				values: [ 25, 100 ],
				slide: function( event, ui ) {
					$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				}
			});
			$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) + " - $" + $( "#slider-range" ).slider( "values", 1 ) );


		}catch(e){console.info(e);console.info("error!!!");}
	});


	$(function() {
		$( "#slider" ).slider({
			value: 1,
			min: 1,
			max: 12,
			step: 3,
			slide: function( event, ui ) {
		    //$( "#bottle-count" ).val( "$" + ui.value );
			}
		});

		//$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
	});

	
})();


