const Service = {

    fetch ('http://localhost:8000/offers'
)
.
then (res => res.json ())
    .then (data => {
        offers = data;
    });
}

export default Service;