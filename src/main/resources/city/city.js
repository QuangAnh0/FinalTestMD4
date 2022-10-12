function getAllCity(){
    $.ajax({
            type:"get",
            url:"http://localhost:8080/city",

            success:function (data){
                console.log(data);
                let content="";
                for (let i=0;i<data.length;i++){
                    content+=`<tr>
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].area}</td>
        <td>${data[i].population}</td>
        <td>${data[i].GDP}</td>
        <td>${data[i].description}</td>
        <td>${data[i].country}</td>
        <td><a href="${data[i].id}" onclick="deleteCity(this)">Delete</a></td>
        <td><a href="${data[i].id}" onclick="showFormUpdate(this)">Update</a></td></tr>`;
                }
                document.getElementById("listCity").innerHTML = content;

            }
        }
    )
}
getAllCity();
function addNewCity() {
    let name = $('#name').val();
    let area = $('#area').val();
    let population = $('#population').val();
    let gdp = $('#gdp').val();
    let description = $('#description').val();
    let country = $('#country').val();
    let newCity={
        name:name,
        area:area,
        population:population,
        gdp:gdp,
        description:description,
        country:country,

    }
    console.log(newCity);
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newCity),
        url: "http://localhost:8080/city/",
        success: function (data){
            getAllCity();
        }
    });

    event.preventDefault();
}

function deleteCity(element){

    let id=element.getAttribute("href");
    $.ajax({
        type: "delete",
        url: "http://localhost:8080/city/"+id,
        success:function (date){
        getAllCity();
        }
    })
    event.preventDefault();
}
function showFormUpdate(element){
    let id = element.getAttribute("href");
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "get",
        url: "http://localhost:8080/city/"+id,
        success: function (data) {
            console.log(data.country)
            $('#id').attr('value',`${data.id}`)
            $('#name').attr('value',`${data.name}`)
            $('#area').attr('value',`${data.area}`)
            $('#population').attr('value',`${data.population}`)
            $('#gdp').attr('value',`${data.GDP}`)
            $('#description').attr('value',`${data.description}`)
            $('#country').attr('value',`${data.country}`)

        }

    })

    event.preventDefault();
}
function updateCity() {
    let id = $('#id').val();
    let name = $('#name').val();
    let area = $('#area').val();
    let population = $('#population').val();
    let gdp = $('#gdp').val();
    let description = $('#description').val();
    let country = $('#country').val();
    let CityEdit={
        name:name,
        area:area,
        population:population,
        gdp:gdp,
        description:description,
        country:country,

    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "put",
        url: "http://localhost:8080/city/"+id,
        data:JSON.stringify(CityEdit),
        success: function (data) {
            console.log(id);
            getAllCity();
        }
    })

    event.preventDefault();
}
