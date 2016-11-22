function MainCtrl($localStorage, ngDialog) {
    var vm = this;
    if(typeof $localStorage.shops == 'undefined') {
        $localStorage.shops = [];
    }
vm.shops = $localStorage.shops;

vm.store = {};
vm.submit = function(store){
    console.log($localStorage.shops);

    $localStorage.shops.push(store);

    ngDialog.close();
};

    vm.clickToOpen = function () {
        ngDialog.open({ template: './views/form.html', className: 'ngdialog-theme-default',
            controllerAs: 'main'});
    };



   window.initMap = function() {

        var geocoder = new google.maps.Geocoder();
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var mapOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    };

    vm.codeAddress =function() {


        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var mapOptions = {
            zoom: 8,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var address = document.getElementById('address').value;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': "Минск"}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    }








}








angular.module('TestApp')
.controller("MainCtrl", MainCtrl);