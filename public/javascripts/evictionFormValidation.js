function validateEvictionForm() {
    let validFlag = true;
    const name = document.forms["evictionForm"]["name"].value;
    const year = document.forms["evictionForm"]["year"].value;
    const evictions = document.forms["evictionForm"]["evictions"].value;
    const evictionFiling = document.forms["evictionForm"]["evictionFilings"].value;
    const evictionRate = document.forms["evictionForm"]["evictionRate"].value;
    const evictionFilingRate = document.forms["evictionForm"]["evictionFilingRate"].value;
    const Population = document.forms["evictionForm"]["population"].value;

    if (name === '') {
        document.getElementById("NameError").innerHTML = "State Name can not be empty";
        validFlag = false;
    }
    if (year === '') {
        document.getElementById("yearError").innerHTML = "Year can not be empty";
        validFlag = false;
    }
    if (evictions === '') {
        document.getElementById("evictionError").innerHTML = "Evictions can not be empty";
        validFlag = false;
    }
    if (evictionFiling === '') {
        document.getElementById("evictionFilingError").innerHTML = "Eviction Filing can not be empty";
        validFlag = false;
    }
    if (evictionRate === '') {
        document.getElementById("evictionRateError").innerHTML = "Eviction Rate can not be empty";
        validFlag = false;
    }
    if (evictionFilingRate === '') {
        document.getElementById("evictionFilingRateError").innerHTML = "Eviction Filing Rate can not be empty";
        validFlag = false;
    }
    if (Population === '') {
        document.getElementById("populationError").innerHTML = "Population can not be empty";
        validFlag = false;
    }

    return validFlag;
}
