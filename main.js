function tinhDiemTB(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

function domIDNumber(id) {
    return Number(document.getElementById(id).value);
}

document.getElementById("tinhDiem").onclick = function () {
    var diemToan = Number(document.getElementById("diemToan").value);
    var diemLy = Number(document.getElementById("diemLy").value);
    var diemHoa = Number(document.getElementById("diemHoa").value);
    // var diemVan = Number(document.getElementById("diemVan").value);
    // var diemSu = Number(document.getElementById("diemSu").value);
    // var diemDia = Number(document.getElementById("diemDia").value);

    var diemVan = domIDNumber("diemVan");
    var diemSu = domIDNumber("diemSu");
    var diemDia = domIDNumber("diemDia");

    let DTBA = tinhDiemTB(diemToan, diemLy, diemHoa);
    let DTBC = tinhDiemTB(diemVan, diemSu, diemDia);

    document.getElementById("DTBA").value = DTBA;
    document.getElementById("DTBC").value = DTBC;
};

///Bài tập 2: zoom in zooom out

document.getElementById("btnZoomInHome").onclick = () => {
    //input lấy ra kích thước hiện tại của icon home
    var sizeOfHome = document.getElementById("home").style.fontSize;
    var size = Number(sizeOfHome.replace("px", "")); //ép kiểu lấy ra số học
    // console.log(size);
    size += 5;
    document.getElementById("home").style.fontSize = size + "px";
    //console.log(size);
};
document.getElementById("btnZoomOutHome").onclick = () => {
    //input lấy ra kich thước hiện tại => -5px mỗi click
    var sizeOfHome = document.getElementById("home").style.fontSize;
    var size = Number(sizeOfHome.replace("px", "")); //ép kiểu lấy ra số học
    size -= 5;
    document.getElementById("home").style.fontSize = size + "px";
};
//hàm để tăng giảm fontsize

domId("btnZoomInText").onclick = () => {
    //lấy ra input là fontsize của text hiện tại
    var sizeText = Number(domId("txtContent").style.fontSize.replace("px", ""));
    console.log(sizeText); //in ra kích thước của text

    domId("txtContent").style.fontSize = sizeText + 2 + "px";
};
domId("btnZoomOutText").onclick = () => {
    //lấy ra input là fontsize của text hiện tại
    var sizeText = Number(domId("txtContent").style.fontSize.replace("px", ""));
    console.log(sizeText); //in ra kích thước của text

    domId("txtContent").style.fontSize = sizeText - 2 + "px";
};

domId("btnZoomInText2").onclick = () => {
    zoomInOut(1, "txtContent2");
};
domId("btnZoomOutText2").onclick = () => {
    zoomInOut(-1, "txtContent2");
};

domId("btnZoomInImg").onclick = () => {
    zoomImage(2, "imageZoom");
};

domId("btnZoomOutImg").onclick = () => {
    zoomImage(-2, "imageZoom");
};

// domId("btnZoomInImg").onclick = () => {
//     console.log(domId("imageZoom"));
//     var sizeImg = Number(domId("imageZoom").style.width.replace("%", ""));
//     domId("imageZoom").style.width = sizeImg + 1 + "%";
// };

// domId("btnZoomOutImg").onclick = () => {
//     console.log(domId("imageZoom"));
//     var sizeImg = Number(domId("imageZoom").style.width.replace("%", ""));
//     domId("imageZoom").style.width = sizeImg - 1 + "%";
// };
