/**
 * Created by z on 9/1/17.
 */

function initialLoad(){
    const element = document.querySelector('form');
    console.log(element);
    element.addEventListener('submit', function(){
        event.preventDefault();
    });
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: "Us",
            key: 'AIzaSyB7BczDllbg87CU109i4fKK9FAlolU7EXc'
        }
    })
        .then(function (response) {
            console.log(response);
            var latAndLng = response.data.results[0].geometry.location;
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: latAndLng
            });

        })
}
function geocode(fname,mname,lname) {
    var input = '?fname='+fname+'&mname='+mname+'&lname='+lname;
    console.log(input);
    axios.get('/api/phy'+input)
        .then(function (result) {
            if(result === undefined || result === null || result.data.length === 0){
                alert("No results found");
                initialLoad();
                console.log("this is if condition");
                return
            }
            console.log("this is result ",result.data.length);
            var data = result.data[0];
            var address = data.address;
            console.log(address);
            console.log("data is ",data);
            axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: address,
                    key: 'AIzaSyB7BczDllbg87CU109i4fKK9FAlolU7EXc'
                }
            })
                .then(function (response) {
                    console.log(response);
                    var latAndLng = response.data.results[0].geometry.location;
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 4,
                        center: latAndLng
                    });
                    function getContentFromData(){
                        return "<b>First Name: </b>"+data.fname+ "<br>"+"<b>Middle Name: </b>"+data.mname+ "<br> "+"<b>Last Name: </b>"+data.lname+ "<br> "+"<b>Address: </b>"+data.address+", "+data.state+", "+data.zipcode;
                    }
                    var contentString = getContentFromData(data);
                    var infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    var marker = new google.maps.Marker({
                        position: latAndLng,
                        map: map,
                        title: data.fname + " "+data.mname + " " +data.lname
                    });
                    marker.addListener('click', function() {
                        infowindow.open(map, marker);
                    });
                })
        });

}