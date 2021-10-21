function changeGreenColor() {
    let colorPath = document.getElementById('one');
    let colorPath2 = document.getElementById('two');
    let colorPath3 = document.getElementById('three');
    let colorPath4 = document.getElementById('four');
    colorPath.src = "./img/AirForce1CraterGreen.png";
    colorPath2.src = "./pageImg/angle1.png";
    colorPath3.src = "./pageImg/angle2.png";
    colorPath4.src = "./pageImg/angle3.png";
}

function changeWhiteColor() {
    let colorPath = document.getElementById('one');
    let colorPath2 = document.getElementById('two');
    let colorPath3 = document.getElementById('three');
    let colorPath4 = document.getElementById('four');
    colorPath.src = "./img/AirForce1CraterWhite.png";
    colorPath2.src = "./pageImg/angle1.png";
    colorPath3.src = "./pageImg/angle2.png";
    colorPath4.src = "./pageImg/angle3.png";
}

function changeImage(id) {
    let imagePath = document.getElementById(id).getAttribute('src');
    document.getElementById('img-main').setAttribute('src', imagePath);
};

